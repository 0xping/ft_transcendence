
import BaseComponent from "../../components/BaseComponent.js";

class TextSlider extends BaseComponent {
	_createInitialState() {
		return {};
	}

	async render() {
		this.innerHTML = `	`;



		this._renderPartial(); // Trigger partial render
	}



	addEventListeners() {
	}
}

if (!customElements.get('text-slider')) {
	customElements.define('text-slider', TextSlider);
}

export default TextSlider;
