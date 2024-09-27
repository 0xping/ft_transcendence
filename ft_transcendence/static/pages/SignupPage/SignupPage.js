import BaseComponent from "../../components/BaseComponent.js";
import "../../components/Forms/SignupCard.js"

class SignupPage extends BaseComponent {
	async render() {

		this.innerHTML = `
			<div class="container signupPage" >
				<h1>lets Create an <span>account</span></h1>
				<signup-card></signup-card>
			</div>
		`;
		this._renderPartial();
	}
	addEventListeners() {
	}
}


if (!customElements.get('signup-page')) {
	customElements.define('signup-page', SignupPage);
}

export default SignupPage;
