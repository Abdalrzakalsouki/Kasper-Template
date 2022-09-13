//Image Slider

const imagesURL = [
  "../images/shuffle-01.jpg",
  "../images/landing.jpg",
  "../images/shuffle-03.jpg",
];
let orgin = false;

let leftButton = document.getElementById("leftB");
let rightButton = document.getElementById("rightB");
let landing = document.getElementsByClassName("landing");
let bullets = document.getElementsByClassName("bullets");

leftButton.style.cursor = "pointer";
rightButton.style.cursor = "pointer";

leftButton.addEventListener("click", function () {
  rightButton.style.display = "block";
  if (orgin === true) {
    landing[0].style.backgroundImage = `url(${imagesURL[1]})`;
    orgin = false;
    for (let item of bullets[0].children) item.classList.remove("active");
    bullets[0].children[1].classList.add("active");
  } else {
    landing[0].style.backgroundImage = `url(${imagesURL[0]})`;
    orgin = true;
    leftButton.style.display = "none";
    for (let item of bullets[0].children) item.classList.remove("active");
    bullets[0].children[0].classList.add("active");
  }
});

rightButton.addEventListener("click", function () {
  leftButton.style.display = "block";
  if (orgin === true) {
    landing[0].style.backgroundImage = `url(${imagesURL[1]})`;
    orgin = false;
    for (let item of bullets[0].children) item.classList.remove("active");
    bullets[0].children[1].classList.add("active");
  } else {
    landing[0].style.backgroundImage = `url(${imagesURL[2]})`;
    orgin = true;
    rightButton.style.display = "none";
    for (let item of bullets[0].children) item.classList.remove("active");
    bullets[0].children[2].classList.add("active");
  }
});

//Profilo image filter
let images = document.getElementsByClassName("boxImage");
let shuffleOptions = document.getElementsByClassName("shuffle")[0].children;

for (let item of shuffleOptions) {
  item.style.cursor = "pointer";
  item.addEventListener("click", filterItems.bind(null, item.textContent));
}

function filterItems(item) {
  for (let image of images) {
    if (item === "App") {
      image.classList.contains("app")
        ? (image.style.display = "block")
        : (image.style.display = "none");
    } else if (item === "Photo") {
      image.classList.contains("photo")
        ? (image.style.display = "block")
        : (image.style.display = "none");
    } else if (item === "Web") {
      image.classList.contains("web")
        ? (image.style.display = "block")
        : (image.style.display = "none");
    } else if (item === "Print") {
      image.classList.contains("print")
        ? (image.style.display = "block")
        : (image.style.display = "none");
    } else if (item === "All") {
      image.style.display = "block";
    }
  }
}

//Contact button
let contactButton = document.getElementsByClassName("contact-link");
contactButton[0].addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/abdulrazzakalsssouki", "_blank");
});

//Skills bar progress

function getSpanArr() {
  return new Promise((resolve, reject) => {
    const SpanArr = [];
    let skills = document.querySelectorAll(".prog");
    for (let skill of skills) {
      SpanArr.push(skill.children);
    }
    resolve(SpanArr);
    reject(Error("Could not get the data"));
  }).then((span) => {
    setTimeout(() => {
      span[0][0].setAttribute("data-progress", "70%");
      span[0][0].style.width = "70%";
      span[1][0].setAttribute("data-progress", "90%");
      span[1][0].style.width = "90%";
      span[2][0].setAttribute("data-progress", "55%");
      span[2][0].style.width = "55%";
      span[3][0].setAttribute("data-progress", "84%");
      span[3][0].style.width = "84%";
    }, 600);
  });
}

window.onscroll = function () {
  if (window.scrollY > 5000 && window.scrollY < 7000) {
    getSpanArr();
  }
};
