// demo page

import BaseComponent from "../../components/BaseComponent.js";

class HomePage extends BaseComponent {
	_createInitialState() {
		return { count: 0, incrementCount: 0, decrementCount: 0 };
	}

	async render() {
		this.innerHTML = `
            <style>
                .home { padding: 20px; text-align: center; }
                button { margin: 10px; padding: 5px 10px; font-size: 16px; }
            </style>
            <div class="home">
                <h2 id="count">Counter: ${this._state.count}</h2>
                <button id="increment">Increment</button>
                <button id="decrement">Decrement</button>
				<br>
				<a href="/games/rps/match/4/">Home</a>
				<h2 id="increment_count">increment_count : ${this._state.incrementCount} </h2>
				<h2 id="decrement_count">decrement_count : ${this._state.decrementCount} </h2>
            </div>
        `;



		this._renderPartial(); // Trigger partial render
	}

	renderCount(newValue) {

		const countElement = this.querySelector('#count');
		if (countElement) {
			countElement.textContent = "Counter: " + newValue;
		}
	}

	renderIncrementCount(newValue) {
		const countElement = this.querySelector('#increment_count');
		if (countElement) {
			countElement.textContent = "increment_count: " + newValue;
		}
	}

	renderDecrementCount(newValue) {
		const countElement = this.querySelector('#decrement_count');
		if (countElement) {
			countElement.textContent = "decrement : " + newValue;
		}
	}

	addEventListeners() {
		// Register the render function for 'count'
		console.log({ ...this });
		this.addRenderFunction('count', (newValue) => { this.renderCount(newValue) });
		this.addRenderFunction('decrementCount', (newValue) => { this.renderDecrementCount(newValue) });
		this.addRenderFunction('incrementCount', (newValue) => { this.renderIncrementCount(newValue) });

		this.querySelector('#increment').addEventListener('click', () => {
			this.setState({ count: this._state.count + 1 });
			this.setState({ incrementCount: this._state.incrementCount + 1 });
		});
		this.querySelector('#decrement').addEventListener('click', () => {
			this.setState({ count: this._state.count - 1 });
			this.setState({ decrementCount: this._state.decrementCount + 1 });
		});
	}
}

if (!customElements.get('home-page')) {
	customElements.define('home-page', HomePage);
}

export default HomePage;
