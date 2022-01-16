//Check Local Storage
let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  //Remove active class from li
  document.querySelectorAll(".color-list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

let backgroundActive = true;
let backgroundInterval;

let checkBackground = localStorage.getItem("background-option");
if (checkBackground !== null) {
  if (checkBackground === "true") {
    backgroundActive = true;
  } else {
    backgroundActive = false;
  }
  document.querySelectorAll(".change-background span").forEach((element) => {
    element.classList.remove("active");
  });
  if (checkBackground === "true") {
    document.querySelector(".change-background .yes").classList.add("active");
  }
}

//Background Options
function colorizeBackground() {
  if (backgroundActive === true) {
    backgroundInterval = setInterval(() => {
      //Random Number
      let random = Math.floor(Math.random() * images.length);
      //Change The Image
      landingPage.style.backgroundImage = `url(imgs/${images[random]})`;
    }, 5000);
  }
}
//Select Gear Icon and Setting Box
const gearIcon = document.querySelector(".gear-container .gear");
const settingBox = document.querySelector(".setting-box");
//By Click on Icon Toggle Open and Spin Classes
gearIcon.addEventListener("click", () => {
  gearIcon.classList.toggle("fa-spin");
  settingBox.classList.toggle("open-set-box");
});

//Select Items List
const liItems = document.querySelectorAll(".options-box .color-list li");
//Looping over list items
liItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("color-option", e.target.dataset.color);
    //Remove active class from li
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //Add active class on Target
    e.target.classList.add("active");
  });
});

//Change Background Random
const randomBackEl = document.querySelectorAll(
  ".change-setting-content .change-background span"
);
//Looping over list items
randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    //Remove active class from span
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //Add active class on Target
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundActive = true;
      colorizeBackground();
      localStorage.setItem("background-option", true);
    } else {
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
});

//Get Landing Page
const landingPage = document.querySelector(".landing-page");

//Get The Background Image
landingPage.style.backgroundImage = "url(imgs/02.jpg)";

//Get Array of Images
const images = ["01.jpg", "03.jpg", "03.jpg", "04.jpg", "05.jpg"];

//Make a Function to change the background Images
colorizeBackground();
