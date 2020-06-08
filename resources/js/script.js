/* ---------------------------------------------- */
/* NAVIGATION */
/* ---------------------------------------------- */

const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1500
});

    
/* ---------------------------------------------- */
/* VIDEO PLAYER */
/* ---------------------------------------------- */

document.addEventListener("click", (event ) =>  {
    if (event.target.matches(".play") || event.target.matches(".close")) {
      event.preventDefault();
      toggleVideo();
    }
  },
  false
);

function toggleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");

  trailer.classList.toggle("active");
  video.currentTime = 0;
  video.pause();
}

/* ---------------------------------------------- */
/* TIMELINE */
/* ---------------------------------------------- */

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slides");

const indicatorParent = document.querySelector(".control ul");
const indicators = document.querySelectorAll(".control li");
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    document.querySelector(".control .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translateX(" + i * -10 + "%)";
    index = i;
  });
});

left.addEventListener("click", function () {
  index = index > 0 ? index - 1 : 0;
  document.querySelector(".control .selected").classList.remove("selected");
  indicatorParent.children[index].classList.add("selected");
  slider.style.transform = "translateX(" + index * -10 + "%)";
});

right.addEventListener("click", function () {
  index = index < 10 - 1 ? index + 1 : 9;
  document.querySelector(".control .selected").classList.remove("selected");
  indicatorParent.children[index].classList.add("selected");
  slider.style.transform = "translateX(" + index * -10 + "%)";
  slider.style.transition = "all 2s"
  
});

