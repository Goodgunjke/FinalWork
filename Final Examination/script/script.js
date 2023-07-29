"use strict";

const menuMainEl = document.querySelector(".header_menu");
const menuOpenEl = document.querySelector(".mobile-menu");

menuOpenEl.addEventListener("click", () => {
  menuMainEl.style.display = "block";
});

const menuCloseEl = document.querySelector(".menu_close");
menuCloseEl.addEventListener("click", () => {
  menuMainEl.style.display = "none";
});

const headerElRight = document.querySelector(".header-right");
const headerType = window.getComputedStyle(headerElRight);
window.addEventListener("resize", () => {
  let headerTypeMaxWidth = headerType.getPropertyValue("max-width");
  if (headerTypeMaxWidth === "618px") {
    menuMainEl.style.display = "block";
  } else {
    menuMainEl.style.display = "none";
  }
});

const password = document.querySelectorAll(".form_input_password");
const findError = (enter, approve) => {
  const error = approve.value === enter.value ? true : false;
  return error;
};

const successHighlight = (elementsList) => {
  elementsList.forEach((element) => {
    element.style.outline = "2px solid green";
  });
};

const errorHighlight = (elementsList) => {
  elementsList.forEach((element) => {
    element.style.outline = "2px solid red";
  });
};

password[1].addEventListener("input", () => {
  if (findError(password[0], password[1])) {
    successHighlight(password);
  } else {
    errorHighlight(password);
  }
});

let stars = document.querySelectorAll(".rating_star_path");

for (const star of stars) {
  star.addEventListener("click", () => {
    star.setAttribute("data-clicked", "true");
  });
}
