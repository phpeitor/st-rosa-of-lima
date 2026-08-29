const colors = ['#f9a363','#8c1346','#d13d3c','#e2663b'];

function addElement(prefix, count, cssClass, useFill = false) {
	const variantCount = prefix === "petal" ? 4 : count;
	const randomVariant = Math.floor(Math.random() * variantCount) + 1; 
  const randomColor = Math.floor(Math.random() * colors.length);
  const randomX = Math.floor(Math.random() * 100);
  const randomY = Math.floor(Math.random() * 100);

  let svg;
  
  if (useFill) {
    svg = `
      <svg style="top:${randomY}%; left:${randomX}%;" class="${cssClass}" version="1.1" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23.217 23.217" 
        xml:space="preserve">
        <g>
          <path style="fill:${colors[randomColor]};" d="M11.608,21.997c-22.647-12.354-6.268-27.713,0-17.369C17.877-5.716,34.257,9.643,11.608,21.997z"/>
        </g>
      </svg>
    `;
  } else {
		const extension = prefix === "petal" ? "png" : "svg";
		const driftX = (Math.random() - 0.5) * 110;
		svg = `<img style="top:${randomY}%; left:${randomX}%; --petal-rotate:${Math.floor(Math.random() * 80) - 40}deg; --petal-drift:${driftX}px;" class="${cssClass}" src="./resources/${prefix}${randomVariant}.${extension}" alt="" aria-hidden="true">`;
  }

  $("body").append(svg);
}

function center() {
  $(".heart, .rose").css('-webkit-animation','show-heart 4s ease');
}

function deletes() {
	$('.heart:lt(100), .rose:lt(100), .petal:lt(100)').remove();
}

const elements = ["rose", "heart", "petal"];

function getRandomElement() {
  return elements[Math.floor(Math.random() * elements.length)];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function openImageLightbox(imageSrc, imageAlt, triggerElement) {
	if (document.querySelector(".logo-lightbox")) {
		return;
	}

	const rect = triggerElement.getBoundingClientRect();
	const elementCX = rect.left + rect.width / 2;
	const elementCY = rect.top + rect.height / 2;
	const vpCX = window.innerWidth / 2;
	const vpCY = window.innerHeight / 2;
	const dx = elementCX - vpCX;
	const dy = elementCY - vpCY;

	const overlay = document.createElement("div");
	overlay.className = "logo-lightbox";
	overlay.style.setProperty("--lbx", dx + "px");
	overlay.style.setProperty("--lby", dy + "px");

	const img = document.createElement("img");
	img.src = imageSrc;
	img.className = "logo-lightbox__img";
	img.alt = imageAlt;

	const closeBtn = document.createElement("button");
	closeBtn.className = "logo-lightbox__close";
	closeBtn.setAttribute("aria-label", "Cerrar");
	closeBtn.innerHTML = "&times;";

	overlay.appendChild(img);
	overlay.appendChild(closeBtn);
	document.body.appendChild(overlay);

	requestAnimationFrame(function () {
		requestAnimationFrame(function () {
			overlay.classList.add("logo-lightbox--open");
		});
	});

	function onKey(e) {
		if (e.key === "Escape") {
			closeLightbox();
		}
	}

	function closeLightbox() {
		document.removeEventListener("keydown", onKey);
		overlay.classList.remove("logo-lightbox--open");
		overlay.classList.add("logo-lightbox--closing");
		window.setTimeout(function () {
			overlay.remove();
		}, 420);
	}

	closeBtn.addEventListener("click", function (e) {
		e.stopPropagation();
		closeLightbox();
	});

	overlay.addEventListener("click", function (e) {
		if (e.target === overlay) closeLightbox();
	});

	document.addEventListener("keydown", onKey);
}

let selectedEffect = "petal";

function getBackgroundVideoSource(effectName) {
	return effectName === "petal" ? "./resources/main.mp4" : "./resources/video.mp4";
}

function updateBackgroundVideo(effectName) {
	const video = document.getElementById("video-background");
	if (!video) return;

	const source = video.querySelector("source");
	if (!source) return;

	const nextSource = getBackgroundVideoSource(effectName);
	if (source.getAttribute("src") === nextSource) return;

	source.src = nextSource;
	video.load();
	video.play().catch(function () {});
}

function getSelectedEffect() {
	return selectedEffect === "random" ? getRandomElement() : selectedEffect;
}

function setSelectedEffect(effect, button) {
	selectedEffect = effect;
	document.querySelectorAll(".effect-button").forEach(function (effectButton) {
		const isActive = effectButton === button;
		effectButton.classList.toggle("effect-button--active", isActive);
		effectButton.setAttribute("aria-pressed", String(isActive));
	});
	updateBackgroundVideo(effect === "petal" ? "petal" : effect);
}

function celebrateCenter() {
	const centerButton = document.querySelector("#button");
	centerButton.classList.remove("button--celebrating");
	void centerButton.offsetWidth;
	centerButton.classList.add("button--celebrating");

	for (let index = 0; index < 12; index += 1) {
		const angle = (Math.PI * 2 * index) / 12;
		const petal = document.createElement("img");
		petal.className = "petal petal--burst";
		petal.src = `./resources/petal${Math.floor(Math.random() * 4) + 1}.png`;
		petal.alt = "";
		petal.setAttribute("aria-hidden", "true");
		petal.style.left = "50%";
		petal.style.top = "50%";
		petal.style.setProperty("--burst-x", `${Math.cos(angle) * 260}px`);
		petal.style.setProperty("--burst-y", `${Math.sin(angle) * 260}px`);
		petal.style.setProperty("--petal-drift", `${(Math.random() - 0.5) * 90}px`);
		document.body.appendChild(petal);
		window.setTimeout(() => petal.remove(), 1200);
	}

	window.setTimeout(() => {
		document.querySelector(".timeline").scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
	}, 460);
}

const logoTrigger = document.querySelector(".logo");
logoTrigger.addEventListener("click", function () {
	openImageLightbox("./resources/logo.webp", "Emblema de Santa Rosa de Lima", logoTrigger);
});
logoTrigger.addEventListener("keydown", function (event) {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		logoTrigger.click();
	}
});

const centerButton = document.querySelector("#button");

if (typeof tippy !== "undefined") {
	tippy(centerButton, {
		content: "Descubrir su historia",
		placement: "top",
		animation: "shift-away",
		theme: "light",
		arrow: true,
		duration: 180,
		interactive: false,
	});
}

centerButton.addEventListener("click", celebrateCenter);
centerButton.addEventListener("keydown", function (event) {
	if (event.key === "Enter" || event.key === " ") {
		event.preventDefault();
		celebrateCenter();
	}
});

document.querySelectorAll(".effect-button").forEach(function (button) {
	button.addEventListener("click", function () {
		setSelectedEffect(button.dataset.effect, button);
	});
});

const number = getRandomNumber();
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
updateBackgroundVideo(getSelectedEffect());
setInterval(() => {
	const effect = getSelectedEffect();
	addElement(effect, number, effect, false);
}, reducedMotion ? 260 : 90);
setInterval(center, 200);
setInterval(deletes, 8000);