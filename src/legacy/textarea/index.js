/* global tinyMCE */
import { nativeVlElement, define, awaitUntil } from '../../utils/core';
import { VlLinkToolbarFactory } from './vl-tinymce-link-toolbar.js';
import { vlFormValidation, vlFormValidationElement } from '../../components/form-validation';
import 'tinymce/tinymce.min.js';

export class VlTextarea extends vlFormValidationElement(nativeVlElement(HTMLTextAreaElement)) {
  static get _observedAttributes() {
    return vlFormValidation._observedAttributes().concat(['error', 'success']);
  }

  static get _observedClassAttributes() {
    return ['disabled', 'block', 'error', 'success', 'focus', 'rich'];
  }

  connectedCallback() {
    this.classList.add('vl-textarea');
    this._dressFormValidation();
    if (this.isRich) {
      this._configureWysiwyg();
    }
  }

  disconnectedCallback() {
    if (this.isRich) {
      this._destroyWysiwyg();
    }
  }

  get isRich() {
    return this.hasAttribute('data-vl-rich');
  }

  get editor() {
    return this._editor;
  }

  get _classPrefix() {
    return 'vl-textarea--';
  }

  get _toolbar() {
    return this.getAttribute('toolbar');
  }

  get _wysiwygConfig() {
    return {
      target: this,
      menubar: false,
      resize: true,
      elementpath: false,
      branding: false,
      powerpaste_word_import: 'clean',
      powerpaste_html_import: 'clean',
      content_css: '/src/style.css',
      verify_html: false,
      forced_root_block: 'p',
      body_class: 'vl-typography',
      plugins: 'hr lists advlist paste',
      formats: {
        bold: { inline: 'b' },
        italic: { inline: 'i' },
        underline: { inline: 'u' },
        strikethrough: { inline: 's' },
      },
      toolbar: this._toolbar || 'undo redo | bold italic underline strikethrough',
      setup: (editor) => {
        this._registerVlLinkToolbar(editor);
        this._initWysiwyg(editor);
        const observer = new MutationObserver(() => editor.setContent(editor.targetElm.value));
        observer.observe(this, { childList: true, characterData: true, subtree: true });
      },
    };
  }

  _addBlockAttribute() {
    this.setAttribute('data-vl-block', '');
  }

  _configureWysiwyg() {
    this.disabled = true;
    this._addBlockAttribute();
    tinyMCE.baseURL = '/node_modules/tinymce';
    try {
      tinyMCE.init(this._wysiwygConfig);
    } catch (e) {
      console.error(e);
    }
  }

  _initWysiwyg(editor) {
    this._editor = editor;
    this.focus = () => editor.focus();
    editor.on('focus', () => {
      editor.editorContainer.classList.add('focus');
      editor.getBody().classList.add('focus');
    });
    editor.on('blur', () => {
      if (editor.editorContainer) {
        editor.editorContainer.classList.remove('focus');
      }
      if (editor.getBody) {
        editor.getBody().classList.remove('focus');
      }
      editor.save();
      this.dispatchEvent(new Event('change'));
    });
  }

  _destroyWysiwyg() {
    if (this._editor) {
      this.disabled = false;
      this._editor.destroy();
    }
  }

  _registerVlLinkToolbar(editor) {
    editor.ui.registry.addButton('vlLink', new VlLinkToolbarFactory().create(editor));
  }

  _errorChangedCallback(oldValue, newValue) {
    this.__toggleValidationClass(newValue, 'error');
  }

  _successChangedCallback(oldValue, newValue) {
    this.__toggleValidationClass(newValue, 'success');
  }

  _richChangedCallback(oldValue, newValue) {
    if (newValue !== null) {
      if (this.isConnected) {
        this._configureWysiwyg();
      }
    } else {
      this._destroyWysiwyg();
    }
  }

  __toggleValidationClass(value, clazz) {
    if (this.isRich) {
      awaitUntil(() => this._editor && this._editor.getContainer()).then(() => {
        if (this._editor.getContainer()) {
          this._toggleClass(this._editor.getContainer(), value, clazz);
          this._toggleClass(this._editor.getBody(), value, clazz);
        }
      });
    }
  }
}

Promise.all([vlFormValidation.ready()]).then(() => define('vl-textarea', VlTextarea, { extends: 'textarea' }));
