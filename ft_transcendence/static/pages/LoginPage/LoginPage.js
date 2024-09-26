import BaseComponent from "../../components/BaseComponent.js";
import "../../components/Forms/LoginCard.js"

class LoginPage extends BaseComponent {
	async render() {

		this.innerHTML = `
			<div class="container loginPage">
				<h1>Welcome <span>Back</span></h1>
				<login-card></login-card>
			</div>
		`;
		this._renderPartial();
	}
	addEventListeners() {
	}
}


if (!customElements.get('login-page')) {
	customElements.define('login-page', LoginPage);
}

export default LoginPage;
