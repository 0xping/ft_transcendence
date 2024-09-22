
import BaseComponent from "../BaseComponent.js"

class FormField extends BaseComponent {
	_createInitialState() {
		return {};
	}

	async render() {
		this.innerHTML = `
				<div>
					<label for="email">Email</label>
					<small></small>
				</div>
				<input name="email" type="email" id="email" required>
		`;

		this._renderPartial(); // Trigger partial render
	}


	addEventListeners() {
	}
}

if (!customElements.get('form-field')) {
	customElements.define('form-field', FormField);
}

export default FormField;
