export class InputGroupElement extends HTMLElement {
    public static observedAttributes = [];

    connectedCallback() {
        const title = 'Input group';
        this.innerHTML = `
            <div class="wrapper">
                <div class="container">
                    <div id="welcome">
                        <h2 is="vl-h2" data-vl-alt>${title}</h2>
                        <label is="vl-form-label" for="input-1" data-vl-block="">
                            Input-group met input-addon links
                        </label>
                        <div id="input-group" is="vl-input-group">
                            <button is="vl-button-input-addon" type="button" id="button-1">
                                <span is="vl-icon" data-vl-icon="location"></span>
                                <span is="vl-text" data-vl-visually-hidden="">Locatie kiezen</span>
                            </button>
                            <input is="vl-input-field" type="text" id="input-1" data-vl-block="">
                        </div>
                    </div>
                </div>
                <div class="container">
                    <label is="vl-form-label" for="input-2" data-vl-block="">
                        Input-group met input-addon rechts
                    </label>
                    <div is="vl-input-group">
                        <input is="vl-input-field" type="text" id="input-2" data-vl-block="">
                        <button is="vl-button-input-addon" type="button" id="button-2">
                        <span is="vl-icon" data-vl-icon="location"></span>
                        <span is="vl-text" data-vl-visually-hidden="">Locatie kiezen</span>
                        </button>
                    </div>
                </div>
                <div class="container">
                    <label is="vl-form-label" for="input-3" data-vl-block="">
                        Input group met tekst add-on links
                    </label>
                    <div is="vl-input-group">
                        <button is="vl-button" type="button" id="button-3">Locatie kiezen</button>
                        <input is="vl-input-field" type="text" id="input-3" data-vl-block="">
                    </div>
                </div>
                <div class="container">
                    <label is="vl-form-label" for="input-4" data-vl-block="">
                        Input group met tekst add-on rechts
                    </label>
                    <div is="vl-input-group">
                        <input is="vl-input-field" type="text" id="input-4" data-vl-block="">
                        <button is="vl-button" type="button" id="button-4">Locatie kiezen</button>
                    </div>
                </div>
                <div class="container">
                    <label is="vl-form-label" for="input-5" data-vl-block="">
                        Input group met button links
                    </label>
                    <div is="vl-input-group">
                        <button is="vl-button" type="button" id="button-5">
                        <span is="vl-icon" data-vl-icon="location"></span>
                        <span is="vl-text" data-vl-visually-hidden="">Locatie kiezen</span>
                        </button>
                        <input is="vl-input-field" type="text" id="input-5" data-vl-block="">
                    </div>
                </div>
            </div>
      `;
    }
}

customElements.define('exhibit-input-group', InputGroupElement);
