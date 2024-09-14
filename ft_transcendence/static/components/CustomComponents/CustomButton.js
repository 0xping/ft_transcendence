class CustomButton extends HTMLButtonElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log("hello from button");
	}

}


if (!customElements.get('custom-button')) {
	customElements.define('custom-button', CustomButton, { extends: 'button' });
}

export default CustomButton;
