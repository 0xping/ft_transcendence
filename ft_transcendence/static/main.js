import App from './App.js';

export let globalStore = {
	initialLoad: true,
};
// export const setInitialLoad = (bool) => { initialLoad = bool }

let routes = {
	'/': {
		componentName: 'HomePage',
		elementTag: 'home-page',
		title: 'HomePage',
		meta: [
			{ description: 'Welcome to the Home Page' },
		],
	},

	'/login/': {
		componentName: 'LoginPage',
		elementTag: 'login-page',
		title: 'log in page',
		meta: [
			{ description: 'Welcome to the match Page' },
		],
	},

	'/signup/': {
		componentName: 'SignupPage',
		elementTag: 'signup-page',
		title: 'signup page',
		meta: [
			{ description: 'Welcome to the match Page' },
		],
	},
	'/dashboard/': {
		componentName: 'DashboardPage',
		elementTag: 'dashboard-page',
		title: 'dashboard page',
		meta: [
			{ description: 'Welcome to the dashboard Page' },
		],
	}

};



document.addEventListener('DOMContentLoaded', () => {
	const rootElement = document.getElementById('root');
	const app = new App(rootElement, routes);
	app.start();
});




// '/dashboard/': 'dashboard',
// '/games/<game_name>/': 'game_home',
// '/games/<game_name>/match/': 'match_entry',
// '/games/<game_name>/tournament/': 'tournament_entry',
// '/games/<game_name>/tournament/<tournament_id>/': 'tournament',
// '/games/<game_name>/tournament/<tournament_id>/match/<match_id>/': 'tournament_match',
// '/games/<game_name>/local/setup/': 'local_setup',
// '/games/<game_name>/local/game/<match_id>/': 'local_match',
// '/games/<game_name>/local/tournament/<tournament_id>/': 'local_tournament',
// '/games/<game_name>/local/tournament/<tournament_id>/match/<match_id>/': 'local_tournament_match',