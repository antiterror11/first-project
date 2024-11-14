//header
// navbar active
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav div ul li a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`[href*="${id}"]`).classList.add("active");
      });
    }
  });
};

// magazin
// magazin filter
let iconMenu = document.querySelector(".filter-show");
let body = document.querySelector("body");

iconMenu.addEventListener("click", () => {
  body.classList.toggle("showFilter");
});

// COȘ
// increment & decrement
let valueCount = 1;
let increament = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let count = document.querySelector(".number1");
let inputCount = document.querySelector(".input-count");
let totalCount = document.querySelector(".total-price");
let subtotal = document.querySelector(".subtotal");
let total = document.querySelector(".total");
let price = document.querySelectorAll(".priceAll");

increament.addEventListener("click", () => {
  let add = ++valueCount;
  count.value = add;
  inputCount.value = add;
  price.forEach((prices) => {
    prices.innerHTML = add * 110.0;
  });
  totalCount.innerHTML = add * 110.0;
  subtotal.innerHTML = add * 110.0;
  total.innerHTML = add * 110.0;
});

decrement.addEventListener("click", () => {
  if (valueCount > 1) {
    let sub = --valueCount;
    count.value = sub;
    inputCount.value = sub;
    price.forEach((prices) => {
      prices.innerHTML = add * 110.0;
    });
    totalCount.innerHTML = sub * 110.0;
    subtotal.innerHTML = sub * 110.0;
    total.innerHTML = sub * 110.0;
  }
});

// function with CHeckout pages span
// button click and for span add class black
let toCheckout = document.querySelector(".toCheckout");
let blackBackground = document.querySelector(".addBlack");

toCheckout.addEventListener("click", () => {
  blackBackground.classList.add("black");
});

// produs increment decrement
let number = 1;
let spanMinus = document.querySelector(".span-minus");
let spanPlus = document.querySelector(".span-plus");
let spanNumber = document.querySelector(".span-number");
let spanPrice = document.querySelector(".span-price");

spanPlus.addEventListener("click", () => {
  let add = ++number;
  spanNumber.value = add;
  spanPrice.innerHTML = add * 110.0;
});

spanMinus.addEventListener("click", () => {
  if (number > 1) {
    let sub = --number;
    spanNumber.value = sub;
    spanPrice.innerHTML = sub * 110.0;
  }
});

// show&hide
let description = document.getElementById("description");
let comment = document.getElementById("comment");
let display = 0;
// description
function showHideDescription() {
  if (display == 1) {
    description.style.display = "none";
    display = 0;
  } else {
    description.style.display = "block";
    display = 1;
  }
}
// comment
function showHideComment() {
  if (display == 1) {
    comment.style.display = "none";
    display = 0;
  } else {
    comment.style.display = "block";
    display = 1;
  }
}

// produs comment
let field = document.querySelector(".textarea");
let backUp = field.getAttribute("placeholder");
let btn = document.querySelector(".btn");
let clear = document.getElementById("clear");

field.onfocus = function () {
  this.setAttribute("placeholder", "");
  this.style.borderColor = "#333";
  btn.style.display = "block";
};
field.onblur = function () {
  this.setAttribute("placeholder", backUp);
  this.style.borderColor = "";
};

clear.onclick = function () {
  btn.style.display = "none";
  field.value = "";
};
