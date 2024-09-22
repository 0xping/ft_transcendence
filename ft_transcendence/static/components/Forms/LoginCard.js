
import BaseComponent from "../BaseComponent.js"

class LoginCard extends BaseComponent {
	_createInitialState() {

		return {};
	}

	async render() {
		console.log("login-card called");

		this.innerHTML = `
			<div class="loginCard">
				<button class="intra">
					<img src="/static/assets/images/42logo.svg" alt="42 logo"/>
					<span>sign in with your intra</span>
				</button>
				<div class="divider">
					<span class="divider-text">or</span>
				</div>
				<form id="loginCard" autocomplete="off" novalidate>
					<form-field class="field" type="email" required></form-field>
					<form-field class="field" type="password" required></form-field>

					<span class="forgetPassword">
						<a href="/resetpassword/">Forgot your password?</a>
					</span>

					<form-field class="field" type="checkbox"></form-field>

					<button class="primary" type="submit">Log In</button>
					<span class="sign-up-link">
						Don't have an account?
						<a href="/signup/">Sign Up</a>
					</span>
				</form>
			</div>
		`;

		this._renderPartial(); // Trigger partial render
	}


	addEventListeners() {
	}
}

if (!customElements.get('login-card')) {
	customElements.define('login-card', LoginCard);
}

export default LoginCard;
