const openMenu = () => {
  const smallUl = document.querySelector(".smallUl");
  smallUl.classList.toggle("open");
};
window.addEventListener("resize", () => {
  if (window.innerWidth >= 991) {
    console.log("2");
    const smallUl = document.querySelector(".smallUl");
    smallUl.classList.remove("open");
  }
});
// icon according
const acordingIcons = document.querySelectorAll(".acordingIcon");
acordingIcons.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    acordingIcons.forEach((element, index) => {
      // if the target = the index element show it
      if (i === index) {
        ele.parentElement.parentElement.classList.toggle("active");
        // rotate svg
        ele.classList.toggle("active");
      } else {
        // remove all active acording except the target
        element.parentElement.parentElement.classList.remove("active");
        // remove all active svg
        element.classList.remove("active");
      }
    });
  });
});
// start selected
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((ele) => {
  ele.addEventListener("click", () => {
    selected.innerHTML = ele.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
// end selected
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let startIndex = 0;
let slidesCount;
if (window.innerWidth >= 992) {
  slidesCount = 3;
} else {
  slidesCount = 1;
}
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    slidesCount = 3;
    moveSlider();
  } else {
    slidesCount = 1;
    moveSlider();
  }
});
nextButton.addEventListener("click", () => {
  if (startIndex < cards.length - slidesCount) {
    startIndex++;
    moveSlider();
  }
  // turn on the fun after click
  console.log("adasd");
  updateButtons();
});

prevButton.addEventListener("click", () => {
  if (startIndex > 0) {
    startIndex--;
    moveSlider();
  }
  // turn on the fun after click
  updateButtons();
});

function moveSlider() {
  // to make the width automatic depending on the card
  const cardWidth = document.querySelectorAll(".card")[0].offsetWidth + 20;
  const offset = -startIndex * cardWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

function updateButtons() {
  prevButton.disabled = startIndex === 0;
  nextButton.disabled = startIndex === cards.length - slidesCount;
}
// turn on the fun
updateButtons();

const ampm = document.querySelectorAll(".ampm");
ampm.forEach((ele) => {
  ele.addEventListener("click", () => {
    ampm.forEach((el) => {
      el.classList.remove("active");
    });
    ele.classList.add("active");
  });
});
