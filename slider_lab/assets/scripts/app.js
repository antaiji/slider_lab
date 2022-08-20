//********//
// SLIDER //
//********//
const slidesContainer = document.querySelector(".projects__show-gallery-inner");
const bulletsContainer = document.querySelector(".projects__bullets-container");
const infoContainer = document.querySelector(".projects__info--container");
const titlesContainer = document.querySelector(".projects__show-titles");

const slides = [
  {
    title: "Rostov-on-Don <br /> Admiral",
    area: 81,
    term: 3.5,
    cost: "Upon request",
    source: "assets/images/image_2_0.png",
  },
  {
    title: "Sochi <br /> Thieves",
    area: 68,
    term: 5,
    cost: "Upon request",
    source: "assets/images/image_2_1.png",
  },
  {
    title: "Rostov-on-Don <br /> Patriotic",
    area: 112,
    term: 4.5,
    cost: "Upon request",
    source: "assets/images/image_2_2.png",
  },
];
// realize switching slides functionality
function moveSlider(num) {
  if (slidesContainer.querySelector(".projects__show-image--active")) {
    slidesContainer
      .querySelector(".projects__show-image--active")
      .classList.remove("projects__show-image--active");
  }
  slidesContainer
    .querySelector(".n" + num)
    .classList.add("projects__show-image--active");

  bulletsContainer
    .querySelector(".projects__bullet--active")
    .classList.remove("projects__bullet--active");
  bulletsContainer
    .querySelector(".n" + num)
    .classList.add("projects__bullet--active");

  infoContainer
    .querySelector(".projects__info--project--active")
    .classList.remove("projects__info--project--active");
  infoContainer
    .querySelector(".n" + num)
    .classList.add("projects__info--project--active");

  titlesContainer
    .querySelector(".projects__show-title--active")
    .classList.remove("projects__show-title--active");
  titlesContainer
    .querySelector(".n" + num)
    .classList.add("projects__show-title--active");
}
// initialize slides images blocks
function initSlides() {
  slides.forEach((slide, index) => {
    let slideImg = `<img src="${
      slide.source
    }" alt="room image" class="projects__show-image fade n${index} ${
      index === 0 ? "projects__show-image--active" : ""
    }" data-index="${index}"/>`;

    slidesContainer.innerHTML += slideImg;
  });
}
// initialize slide information block
function initInfo() {
  slides.forEach((slide, index) => {
    let infoBlock = `
      <div class="projects__info--project n${index} ${
      index === 0 ? "projects__info--project--active" : ""
    }" data-index="${index}">
        <div class="projects__project-info">
          <div class="projects__project-title">City:</div>
          <div class="projects__project-text fade">
            ${slide.title}
          </div>
        </div>

        <div class="projects__project-info">
          <div class="projects__project-title">Apartment area:</div>
          <div class="projects__project-text fade">${slide.area} &#13217;</div>
        </div>

        <div class="projects__project-info">
          <div class="projects__project-title">Repair time:</div>
          <div class="projects__project-text fade">${slide.term} month</div>
        </div>

        <div class="projects__project-info">
          <div class="projects__project-title">Repair cost</div>
          <div class="projects__project-text fade">${slide.cost}</div>
        </div>
      </div>
    `;

    infoContainer.innerHTML += infoBlock;
  });
}
// initialize and add event listeners to bullets
function initBullets() {
  slides.forEach((slide, index) => {
    let sliderBullet = `<span class="projects__bullet n${index} ${
      index === 0 ? "projects__bullet--active" : ""
    }" data-index="${index}"></span>`;
    bulletsContainer.innerHTML += sliderBullet;
  });
  bulletsContainer.querySelectorAll(".projects__bullet").forEach((bullet) => {
    bullet.addEventListener("click", function () {
      moveSlider(this.dataset.index);
    });
  });
}
// initialize and add event listeners to titles
function initTitles() {
  slides.forEach((slide, index) => {
    let titleBlock = `<span class="projects__show-title n${index} ${
      index === 0 ? "projects__show-title--active" : ""
    }" data-index="${index}">${slide.title.replace("<br />", "")}</span>`;

    titlesContainer.innerHTML += titleBlock;
  });
  titlesContainer.querySelectorAll(".projects__show-title").forEach((title) => {
    title.addEventListener("click", function () {
      moveSlider(this.dataset.index);
    });
  });
}
// initialize and add event listeners to arrows
function initArrows() {
  document.querySelectorAll(".projects__arrow").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      let curNumber = +slidesContainer.querySelector(
        ".projects__show-image--active"
      ).dataset.index;
      let nextNumber;
      if (arrow.classList.contains("projects__arrow--l")) {
        nextNumber = curNumber === 0 ? slides.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === slides.length - 1 ? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}
// initialize and add event listeners to handlers for small screens
function initHandlers() {
  document.querySelectorAll(".projects__show-handler").forEach((arrow) => {
    arrow.addEventListener("click", function () {
      let curNumber = +slidesContainer.querySelector(
        ".projects__show-image--active"
      ).dataset.index;
      let nextNumber;
      if (arrow.classList.contains("projects__show-handler--left")) {
        nextNumber = curNumber === 0 ? slides.length - 1 : curNumber - 1;
      } else {
        nextNumber = curNumber === slides.length - 1 ? 0 : curNumber + 1;
      }
      moveSlider(nextNumber);
    });
  });
}
// Initialize all elements on load
document.addEventListener("DOMContentLoaded", function () {
  initSlides();
  initBullets();
  initArrows();
  initInfo();
  initTitles();
  initHandlers();
});
