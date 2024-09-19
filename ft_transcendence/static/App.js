import Router from './SPA/Router.js'

class App {
	constructor(rootElement, routes) {
		this.rootElement = rootElement;
		this.store = {}; // global state store
		this.routes = routes;
		this.router = null;
	}

	start() {
		console.log("starting the app....");
		this.setupInitialState();
		this.router = new Router(this);
	}

	setupInitialState() {
		this.store = {
			profile: {
				name: "ahmed",
			},
			signedIn: false,
			darkMode: false,
		};
	}

	setState(newState) {
		this.store = { ...this.store, ...newState };
	}

	getState() {
		return this.store;
	}
}


export default App;