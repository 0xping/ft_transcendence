import BaseComponent from '../../components/BaseComponent.js'

class matchPage extends BaseComponent {
	constructor() {
		super();
	}
	render() {
		this.innerHTML = `
		<style>
			.match {
				padding: 20px;
				text-align: center;
			}
		</style>
		<div class="match">
			<h2>click</h2>
			<a href="/"> link </a>
		</div>
		`;
	}
}


if (!customElements.get('match-page')) {
	customElements.define('match-page', matchPage);
}

export default matchPage;