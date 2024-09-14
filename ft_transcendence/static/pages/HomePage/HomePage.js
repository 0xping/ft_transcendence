// demo page

import BaseComponent from "../../components/BaseComponent.js";
import "../../components/CustomComponents/CustomInput.js";
import "../../components/CustomComponents/CustomButton.js";

class HomePage extends BaseComponent {
	_createInitialState() {
		return {};
	}

	async render() {
		this.innerHTML = `
				<section class="home-page__section container">
					<div class="hero_text">
						<h1>
							<span>WELCOME </span>
							<span>TO </span>
							<span>YOUR </span><br>
							<span class="highlight">GAME </span>
							<span class="highlight">HUB</span>
						</h1>
						<p>Discover endless fun and competition at GameHub</p>
						<p>Challenge your friends in our top-rated games</p>
						<a href="/games/rps/match/4/">
							<button is="custom-button" type="primary" size="large">PLAY NOW</button>
						</a>
					</div>
					<text-slider data-text="Compete and Win;Play Anytime;Anywhere;Join the Community Have Fun;Engage with Friends;Compete and Win"></text-slider>
					<div class="floating-icons zoomIn">
						<img src="/static/assets/images/floating_icon1.png" %}"  data-speed="3" alt="Icon 1" class="icon icon1" />
						<img src="/static/assets/images/floating_icon2.png" %}"  data-speed="3"  alt="Icon 2" class="icon icon2" />
						<img src="/static/assets/images/floating_icon3.png" %}"  data-speed="3" alt="Icon 3" class="icon icon3" />
						<img src="/static/assets/images/floating_icon4.png" %}"  data-speed="3" alt="Icon 4" class="icon icon4" />
					</div>
					<div class="gradients zoomIn">
						<img src="/static/assets/images/gradient1.svg" %}" alt="gradient svg" class="gradient gradient1" />
						<img src="/static/assets/images/gradient2.svg" %}" alt="gradient svg" class="gradient gradient2" />
						<img src="/static/assets/images/gradient3.svg" %}"   alt="gradient svg" class="gradient gradient3" />
					<div>
				</section>
		`;



		this._renderPartial();
	}



	addEventListeners() {
		document.addEventListener("mousemove", (e) => {
			this.querySelectorAll(".floating-icons img, .gradients .gradient").forEach((icon) => {
				const position = icon.getAttribute("data-speed") || 2;
				const x = (window.innerWidth - e.pageX * position) / 200;
				const y = (window.innerHeight - e.pageY * position) / 200;
				icon.style.transform = `translateX(${x}px) translateY(${y}px)`;
			});


		});
	}
}


if (!customElements.get('home-page')) {
	customElements.define('home-page', HomePage);
}

export default HomePage;
