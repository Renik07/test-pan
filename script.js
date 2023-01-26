/* popup */
const BTN_POPUP = document.getElementById("btn-popup");
const POPUP_HEADER = document.getElementById("popup");
const BTN_ARTICLE = document.getElementById("btn-article");
const POPUP_ARTICLE = document.getElementById("article-popup");

const showPopup = (btn, popup) => {
	btn.addEventListener("click", function() {
		this.classList.toggle("active");
		popup.classList.toggle("active");
	})
}

showPopup(BTN_POPUP, POPUP_HEADER)
showPopup(BTN_ARTICLE, POPUP_ARTICLE)

/* progress bar */
const BTN_PROGRESS = document.querySelector(".article__progress-button");
let progressPercent = document.querySelector(".article__progress-percent");

BTN_PROGRESS.addEventListener("click", function() {
	progressPercent.style.width = `calc(${parseInt(this.innerHTML)}% + ${progressPercent.offsetWidth}px)`;
	progressPercent.innerHTML = parseInt(progressPercent.innerHTML) + parseInt(this.innerHTML) + "%";
})

// slider
const BTN_NEXT = document.querySelector(".slider__button--next");
const BTN_PREV = document.querySelector(".slider__button--prev");
const SLIDER = document.querySelector(".slider__slides");
const SLIDE = document.querySelector(".slider__slide").offsetWidth;
const DOTS = document.querySelectorAll(".slider__pagination-dot");

let viewSlide = 0;
let idx = 0;

DOTS[0].style.backgroundColor = "#FF2D23";
DOTS[0].style.opacity = "1";

BTN_NEXT.addEventListener("click", function () {
	DOTS[viewSlide].style.backgroundColor = "#8F95AC";
	DOTS[viewSlide].style.opacity = "0.3";
	if (viewSlide < 2) {
		viewSlide++;
		idx++;
	} else {
		viewSlide = 0;
		idx = 0;
	}
	DOTS[viewSlide].style.backgroundColor = "#FF2D23";
	DOTS[viewSlide].style.opacity = "1";
	if (window.innerWidth > 1279) {
		SLIDER.style.left = -viewSlide * SLIDE -30 * idx + "px";
	}
	if (window.innerWidth <= 1279) {
		SLIDER.style.left = -viewSlide * SLIDE - 30 * idx + "px";
	}
	if (window.innerWidth <= 768) {
		SLIDER.style.left = -viewSlide * SLIDE - 10 * idx + "px";
	}
});

BTN_PREV.addEventListener("click", function () {
	DOTS[viewSlide].style.backgroundColor = "#8F95AC";
	DOTS[viewSlide].style.opacity = "0.3";
	if (viewSlide > 0) {
		viewSlide--;
		idx--;
	} else {
		viewSlide = 2;
		idx = 2;
	}
	DOTS[viewSlide].style.backgroundColor = "#FF2D23";
	DOTS[viewSlide].style.opacity = "1";
	if (window.innerWidth > 1279) {
		SLIDER.style.left = -viewSlide * SLIDE -30 * idx + "px";
	}
	if (window.innerWidth <= 1279) {
		SLIDER.style.left = -viewSlide * SLIDE - 30 * idx + "px";
	}
	if (window.innerWidth <= 768) {
		SLIDER.style.left = -viewSlide * SLIDE - 10 * idx + "px";
	}
});