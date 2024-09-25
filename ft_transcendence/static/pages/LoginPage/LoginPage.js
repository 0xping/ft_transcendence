// demo page

import BaseComponent from "../../components/BaseComponent.js";
// import "../../components/Forms/FormField.js"
import "../../components/Forms/LoginCard.js"

class LoginPage extends BaseComponent {
	_createInitialState() {
		return {};
	}
	async render() {

		this.innerHTML = `
			<div class="container loginPage">
				<h1>Welcome <span>Back</span></h1>
				<login-card></login-card>
			</div>
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
