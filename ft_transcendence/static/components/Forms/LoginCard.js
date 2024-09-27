
import BaseComponent from "../BaseComponent.js"

class LoginCard extends BaseComponent {
	setProps() {
		this.form = this.querySelector("#loginForm");
		this.emailInput = this.querySelector(".email #email");
		this.passwordInput = this.querySelector(".password #password");
		this.errorSpan = {
			password: this.querySelector("#passwordError"),
			email: this.querySelector("#emailError")
		}
	}

	async render() {
		this.innerHTML = `
			<div class="authCard loginCard">
				<button class="intra">
					<img src="/static/assets/images/42logo.svg" alt="42 logo"/>
					<span>sign in with your intra</span>
				</button>
				<div class="divider">
					<span class="divider-text">or</span>
				</div>
				<form id="loginForm" autocomplete="off" novalidate>
					<div class="field email" type="email" required>
						<div>
							<label for="email">Email</label>
							<span id="emailError"></span>
						</div>
						<input name="email" type="email" id="email" required>
					</div>
					<div class="field password" type="password" required>
						<div>
							<label for="password">Password</label>
							<span id="passwordError"></span>
						</div>
					<input name="password" type="password" id="password" required>
					</div>

					<span class="forgetPassword">
						<a href="/resetpassword/">Forgot your password?</a>
					</span>

					<div class="field rememberMe" type="checkbox">
						<div>
							<label for="rememberMe">Remember me for 30 Days</label>
							<span></span>
						</div>
						<input name="rememberMe" type="checkbox" id="rememberMe" />
					</div>

					<button class="primary submitButton" type="submit">Log In</button>
					<span class="sign-up-link">
						Don't have an account?
						<a href="/signup/">Sign Up</a>
					</span>
				</form>
			</div>
		`;

		this._renderPartial(); // Trigger partial render
	}

	showError = (inputType, message) => {
		this.errorSpan[inputType].textContent = message;
	};

	clearError = (inputType) => {
		this.errorSpan[inputType].textContent = '';
	};

	validateEmail = () => {
		const emailValue = this.emailInput.value.trim();
		const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (emailValue === '') {
			this.showError("email", 'Email is required.');
		} else if (!emailPattern.test(emailValue)) {
			this.showError("email", 'Please enter a valid email address.');
		} else {
			this.clearError("email");
		}
	};


	validatePassword = () => {
		const minLength = 10;
		const maxLength = 20;
		const passwordValue = this.passwordInput.value.trim();
		if (passwordValue === '')
			this.showError("password", 'Password is required.');
		else if (passwordValue.length > maxLength)
			this.showError("password", `the password must be less than ${maxLength} characters`)
		else if (passwordValue.length < minLength)
			this.showError("password", `the password must be at least ${minLength} characters`)
		else
			this.clearError("password");
	};

	// Validate on input only if the field has an error
	checkInput = (input, validationFn) => {
		input.addEventListener('input', () => {
			if (this.errorSpan[input.id].textContent !== '')
				validationFn();
		});
	};


	addEventListeners() {
		this.emailInput.addEventListener('blur', this.validateEmail);
		this.passwordInput.addEventListener('blur', this.validatePassword);
		this.checkInput(this.emailInput, this.validateEmail);
		this.checkInput(this.passwordInput, this.validatePassword);
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();

			this.validateEmail();
			this.validatePassword();

			if (!this.errorSpan.email.textContent && !this.errorSpan.password.textContent) {
				alert('Form submitted successfully!');
				// submit logic
			}
			else {

			}
		});

	}
}

if (!customElements.get('login-card')) {
	customElements.define('login-card', LoginCard);
}

export default LoginCard;
