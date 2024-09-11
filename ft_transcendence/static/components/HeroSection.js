// demo page

import BaseComponent from "../../components/BaseComponent.js";

class HomePage extends BaseComponent {
	_createInitialState() {
		return {};
	}

	async render() {
		this.innerHTML = `

        `;



		this._renderPartial(); // Trigger partial render
	}



	addEventListeners() {
	}
}

if (!customElements.get('hero')) {
	customElements.define('hero', HomePage);
}

export default HomePage;
