// demo page

import BaseComponent from "../../components/BaseComponent.js";

class SignInPage extends BaseComponent {
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


if (!customElements.get('Sign-in-page')) {
	customElements.define('Sign-in-page', SignInPage);
}

export default SignInPage;
