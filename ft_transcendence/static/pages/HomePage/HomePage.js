// demo page

import BaseComponent from "../../components/BaseComponent.js";
import "../../components/CustomComponents/CustomInput.js";

class HomePage extends BaseComponent {
	_createInitialState() {
		return {};
	}

	async render() {
		this.innerHTML = `
			  <section>
				<div class="hero-text">
					<h1>WELCOME TO YOUR <span>GAME-HUB</span></h1>
					<p>Discover endless fun and competition at GameHub</p>
					<p>Challenge your friends in our top-rated games</p>
					<custom-button> Join </custom-button>
				</div>
				<text-slider data-text="Compete and Win;Play Anytime;Anywhere;Join the Community Have Fun;Engage with Friends;Compete and Win" ></text-slider>
				<div class="floating-icons">
					<img src="/static/assets/images/floating_icon1.png" data-speed="0" alt="Icon 1" class="icon icon1" />
					<img src="/static/assets/images/floating_icon2.png" data-speed="-0" alt="Icon 2" class="icon icon2" />
					<img src="/static/assets/images/floating_icon3.png" data-speed="0" alt="Icon 3" class="icon icon3" />
					<img src="/static/assets/images/floating_icon4.png" data-speed="-0" alt="Icon 4" class="icon icon4" />
				</div>
			</section>
		`;



		this._renderPartial();
	}



	addEventListeners() {
		document.addEventListener("mousemove", (e) => {
			this.querySelectorAll(".floating-icons img").forEach((icon) => {
				const position = icon.getAttribute("data-speed");
				const x = (window.innerWidth - e.pageX * position) / 200;
				const y = (window.innerHeight - e.pageY * position) / 200;

				icon.style.transform = `translateX(${x}px) translateY(${y}px)`;
				icon.s
			});
		});
	}
}


if (!customElements.get('home-page')) {
	customElements.define('home-page', HomePage);
}

export default HomePage;
