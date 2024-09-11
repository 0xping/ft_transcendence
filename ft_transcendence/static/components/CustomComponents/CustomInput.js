


class CustomInput extends HTMLElement {
	constructor() {
		super();
		const type = this.getAttribute('type') || "";
		const placeholder = this.getAttribute('placeholder') || "";


		this.innerHTML = `
		<style>
			:host{
			}

		</style>
		<input type="${type}" placeholder="${placeholder}" />

		`
	}



}

if (!customElements.get('custom-input')) {
	customElements.define('custom-input', CustomInput);
}

export default CustomInput;
