import { globalStore } from '../main.js';

class BaseComponent extends HTMLElement {
	constructor() {
		super();
		this.delegatesFocus = true;
		this._state = this._createInitialState(); // Initialize state as an instance property
		this._renderFunctions = new Map(); // Initialize render functions map as an instance property
		this.setProps();
	}

	get state() {
		return this._state;
	}

	setState(newState) {
		this._state = { ...this._state, ...newState };
		this._renderPartial();
	}

	addRenderFunction(key, renderFunction) {
		this._renderFunctions.set(key, renderFunction);
	}

	_renderPartial() {
		for (const [key, renderFunction] of this._renderFunctions.entries()) {
			renderFunction(this._state[key]);
		}
	}

	async connectedCallback() {
		if (!globalStore.initialLoad)
			await this.render();
		this.setProps();
		this.addEventListeners();
	}

	//set all your properties here
	setProps() {

	}

	disconnectedCallback() {
		console.log("disconnectedCallback called");
	}

	_createInitialState() {
		console.warn('_createInitialState method not implemented in subclass.');
		return {}; // To be overridden in subclasses
	}

	async render() {
		console.warn('render method not implemented in subclass.');
	}

	addEventListeners() {
		console.warn('addEventListeners method not implemented in subclass.');
	}

	onShow() { }

	onHide() { }
}

export default BaseComponent;

