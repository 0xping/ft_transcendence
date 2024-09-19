import { globalStore } from '../main.js'


// Router.js
class Router {
	constructor(app) {
		this.app = app;
		this.init();
	}

	async init() {
		console.log("initialize router...");

		window.addEventListener('popstate', () => this.renderPage());

		document.addEventListener('click', (e) => {
			const path = e.composedPath();
			const link = path.find(el => el instanceof HTMLAnchorElement);

			if (link && link.origin === window.location.origin) {
				e.preventDefault();
				this.navigateTo(link.pathname);
			}
		});

		await this.renderPage();
		globalStore.initialLoad = false;
	}

	async navigateTo(path) {
		history.pushState(null, '', path);
		await this.renderPage();
	}

	async renderPage() {
		const path = window.location.pathname;
		const route = this.getMatchingRoute(path);

		if (route) {
			try {
				if (!globalStore.initialLoad) {
					this.app.rootElement.innerHTML = "";
					let cssFile = `/static/pages/${route.componentName}/${route.componentName}.css`;
					const hasCssFile = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).some(link => link.href.includes(cssFile));
					if (!hasCssFile) {
						const stylesLink = document.createElement("link");
						stylesLink.rel = "stylesheet";
						stylesLink.href = cssFile;
						document.head.appendChild(stylesLink);
					}
				}

				await import(`../pages/${route.componentName}/${route.componentName}.js`);
				const componentElement = document.createElement(route.elementTag);
				if (!globalStore.initialLoad) {
					this.app.rootElement.appendChild(componentElement);
				}
				document.title = route.title;
				this.updateMeta(route.meta);
			} catch (error) {
				console.error('Error loading page:', error);
				this.displayNotFound();
			}
		} else {
			console.log("no matching route");
			console.log(path, route);

			this.displayNotFound();
		}
	}

	displayNotFound() {
		this.app.rootElement.innerHTML = '<h2>404 Not Found</h2>';
	}

	getMatchingRoute(path) {
		for (const [routePath, routeDetails] of Object.entries(this.app.routes)) {
			const regex = new RegExp('^' + routePath.replace(/<[^>]+>/g, '([^/]+)') + '$');
			if (regex.test(path)) {
				return routeDetails;
			}
		}
		return null;
	}

	updateMeta(metaList) {
		const updateOrCreateMetaTag = (name, content) => {
			let metaTag = document.querySelector(`meta[name="${name}"]`);
			if (!metaTag) {
				metaTag = document.createElement('meta');
				metaTag.name = name;
				document.head.appendChild(metaTag);
			}
			metaTag.setAttribute('content', content);
		};

		if (metaList && Array.isArray(metaList)) {
			metaList.forEach((meta) => {
				const name = Object.keys(meta)[0];
				const content = meta[name];
				updateOrCreateMetaTag(name, content);
			});
		}
	}
}

export default Router;



