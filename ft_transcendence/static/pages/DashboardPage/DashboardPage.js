

import BaseComponent from "../../components/BaseComponent.js";


class DashboardPage extends BaseComponent {
	_createInitialState() {
		return {};
	}

	async render() {
		this.innerHTML = `
				<h1>hello</h1>
		`;



		this._renderPartial();
	}



	addEventListeners() {

	}
}




if (!customElements.get('dashboard-page')) {
	customElements.define('dashboard-page', DashboardPage);
}

export default DashboardPage;
