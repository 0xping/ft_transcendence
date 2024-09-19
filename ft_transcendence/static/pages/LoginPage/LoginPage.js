// demo page

import BaseComponent from "../../components/BaseComponent.js";

class LoginPage extends BaseComponent {
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


if (!customElements.get('login-page')) {
	customElements.define('login-page', LoginPage);
}

export default LoginPage;
