
import BaseComponent from "../BaseComponent.js"

class FormField extends BaseComponent {
	constructor() {
		super();
		this.type = this.getAttribute("type");
		this.isRequired = this.getAttribute("type");
		this.name = this.getAttribute("name");
	}
	_createInitialState() {
		return { showPassword: this.getAttribute("type") };
	}

	async render() {
		this.innerHTML = `
				<div>
					<label for="">Email</label>
					<span></span>
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
