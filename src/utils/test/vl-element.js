import { WebElement, By } from 'selenium-webdriver';

export class VlElement extends WebElement {
  constructor(driver, identifier, mixins) {
    return (async () => {
      if (typeof identifier === 'string') {
        super(driver, await driver.findElement(By.css(identifier)).getId());
        this.selector = identifier;
      } else {
        super(driver, await identifier.getId());
      }
      this.driver = driver;
      if (await this.driver.executeScript('return arguments[0].shadowRoot != undefined', this)) {
        this.shadowRoot = await new VlElement(
          this.driver,
          await this.driver.executeScript('return arguments[0].shadowRoot.lastElementChild', this),
        );
      }
      if (mixins && Array.isArray(mixins)) {
        mixins.forEach((mixin) => Object.assign(this, mixin));
      }
      return this;
    })();
  }

  async findElement(selector) {
    const element = await super.findElement(selector);
    return await new VlElement(this.driver, element);
  }

  async getElementInShadow(parent, selector) {
    const element = await this.driver.executeScript(
      `return arguments[0].shadowRoot.querySelector('${selector}')`,
      parent,
    );
    return element;
  }

  async getElementsInShadow(parent, selector) {
    const element = await this.driver.executeScript(
      `return arguments[0].shadowRoot.querySelectorAll("${selector}")`,
      parent,
    );
    return element;
  }

  async findShadowDomElements(parent, shadowDomElementSelector) {
    let elements;

    await (elements = this.getElementsInShadow(parent, shadowDomElementSelector));

    if (this.isIterable(elements)) {
      return Promise.all(elements).then((e) => e);
    }

    return elements.then((e) => e);
  }

  isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

  async waitUntilShadowDomElementLocated(parent, shadowDomElementSelector) {
    return this.driver.wait(() => {
      return this.findShadowDomElements(parent, shadowDomElementSelector).then((elements) => {
        if (this.isIterable(elements)) {
          if (elements.length === 0) {
            return false; // element not found
          }
          return elements[0];
        }
        return elements != null;
      });
    }, 5000);
  }

  async waitUntilShadowDomElementsCount(parent, shadowDomElementSelector, count) {
    await this.driver.wait(
      () =>
        this.findShadowDomElements(parent, shadowDomElementSelector).then((elements) => {
          if (elements.length === count) {
            return elements;
          }
          return false;
        }),
      5000,
    );
  }

  async getClassList() {
    return (await this.getAttribute('class')).split(' ');
  }

  async getText() {
    let text;
    if (await this.hasAssignedSlot()) {
      text = await this.getTextContent();
    } else {
      text = await super.getText();
    }
    return text.trim();
  }

  async getTextContent() {
    return this.getAttribute('textContent');
  }

  async isDisabled() {
    return !(await this.isEnabled());
  }

  async hasClass(clazz) {
    return (await this.getClassList()).includes(clazz);
  }

  async hasAttribute(name) {
    return (await this.getAttribute(name)) != null;
  }

  async hasText() {
    return (await this.getText()) !== '';
  }

  async getInnerHTML() {
    return this.getAttribute('innerHTML');
  }

  async hasFocus() {
    const rootActiveElement = await this._getActiveElement(
      await new VlElement(this.driver, this.driver.switchTo().activeElement()),
    );
    const activeElement = await this._getActiveElement(this);

    if (activeElement && rootActiveElement) {
      return WebElement.equals(activeElement, rootActiveElement);
    }
    return false;
  }

  async hasAssignedSlot() {
    return this.driver.executeScript('return arguments[0].assignedSlot != undefined', this);
  }

  async hover() {
    const actions = this.driver.actions();
    await this.scrollIntoView();
    return actions.move({ origin: this }).perform();
  }

  async getAssignedElements(slot) {
    return this.driver.executeScript('return arguments[0].assignedElements()', slot);
  }

  async getAssignedNodes(slot) {
    return this.driver.executeScript('return arguments[0].assignedNodes()', slot);
  }

  async scrollIntoView() {
    return this.driver.executeScript('return arguments[0].scrollIntoView()', this);
  }

  async isInViewport() {
    const bounding = await this.driver.executeScript('return arguments[0].getBoundingClientRect()', this);
    const height = await this.driver.executeScript(
      'return (window.innerHeight || document.documentElement.clientHeight)',
    );
    const width = await this.driver.executeScript('return (window.innerWidth || document.documentElement.clientWidth)');
    const outOfViewport = {
      top: bounding.top < 0,
      left: bounding.left < 0,
      bottom: bounding.bottom > height,
      right: bounding.right > width,
    };
    return !outOfViewport.top && !outOfViewport.left && !outOfViewport.bottom && !outOfViewport.right;
  }

  async scrollToTop() {
    return this.driver.executeScript('return arguments[0].scrollTop = 0;', this);
  }

  async parent() {
    const element = await this.findElement(By.xpath('..'));
    return new VlElement(this.driver, element);
  }

  async equals(element) {
    return WebElement.equals(this, element);
  }

  async getAttribute(attribute) {
    const result = await super.getAttribute(attribute);
    if (result != undefined) {
      return result;
    }
    return super.getAttribute(this._attributePrefix + attribute);
  }

  get _attributePrefix() {
    return 'data-vl-';
  }

  async _getActiveElement(element) {
    if (element.shadowRoot) {
      return this._findActiveElementInShadowRoot(element);
    }
    return element;
  }

  async _findActiveElementInShadowRoot(element) {
    const activeElement = await this.driver.executeScript('return arguments[0].shadowRoot.activeElement', element);
    if (activeElement) {
      return this._getActiveElement(await new VlElement(this.driver, activeElement));
    }
    return null;
  }
}
