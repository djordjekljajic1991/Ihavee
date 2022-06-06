"use strict";
//prevent refress
document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  const scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem("scrollpos", window.scrollY);
};

////page navigation
document
  .querySelector(".navigation-lists")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    if (e.target.classList.contains("header-nav-link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

///
let totalCount = document.querySelector(".quantity-field");
const getIncrement = document.querySelector(".increment");
const getDecrement = document.querySelector(".decrement");
let a = 1;
getIncrement.addEventListener("click", (e) => {
  e.preventDefault();
  a++;
  a = a < 10 ? "0" + a : a;
  totalCount.innerText = a;
});
getDecrement.addEventListener("click", (e) => {
  e.preventDefault();
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    totalCount.innerText = a;
  }
});

// Tabbed component

const galeryList = document.querySelector(".galery_header_lists-box");
let itemBigClass, itemBigClassLeft;
itemBigClass = itemBigClassLeft;
galeryList.addEventListener("click", function (e) {
  const link = e.target.closest(".list-item");
  let id = link.getAttribute("id");
  let itemBigClass = document.querySelector("#item-big-left").classList.value;
  if (id != itemBigClass) {
    document
      .querySelector("#item-big-left")
      .classList.remove(`${itemBigClass}`);
    document.querySelector("#item-big-left").classList.add(`${id}`);
  }
});
/*
  itemBigClassLeft = document.querySelector("#item-big-left").classList.value;
  if (id != itemBigClassLeft) {
    console.log(id);
    document
      .querySelector("#item-big-left")
      .classList.remove(`${itemBigClass}`);
    document.querySelector("#item-big-left").classList.add(`${id}`);
  }
});
*/

///description tab component
const tabs = document.querySelectorAll(".btn-tab");
const tabsContainer = document.querySelector(".description_navigation");
const tabsContent = document.querySelectorAll(".description_text-box");

tabsContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clicked = e.target.closest(".btn-tab");
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("description__tab-active"));
  tabsContent.forEach((c) => c.classList.remove("description_text-active"));

  clicked.classList.add("description__tab-active");

  document
    .querySelector(`.description_text-${clicked.dataset.tab}`)
    .classList.add("description_text-active");
});

///Kolicina
