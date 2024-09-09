//MERUBAH WARNA PADA TOMBOL LIKE DISLIKE
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");
btnLike.onclick = likeColor;
btnDislike.onclick = dislikeColor;
function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
  }
  this.classList.toggle("green");
}
function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
  }
  this.classList.toggle("red");
}
//UNTUK MENAMBAHKAN TANDA X
var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myList[i].appendChild(span).setAttribute("class", "close");
}
//KODE AGAR KETIKA DI KLIK ITEM NYA ILANG
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
//UNTUK MENAMBAHKAN ELEMEN DARI INPUT
function newElement() {
  // Create new list with the inputed value
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;

  // Check the inputed value
  if (inputValue === "" || inputValue === "") {
    alert("Data tidak boleh kosong!");
  } else {
    document
      .getElementById("myUL")
      .appendChild(li)
      .setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
  }

  // NGILANGIN TEXT DI SEARCH BAR
  document.getElementById("myInput").value = "";
  // MEMBUAT BUTTON CLOSE
  var span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span).setAttribute("class", "close");

  // Delete list
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
console.log(buttons);
let currentSlide = 1;
//Manual images slider
var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};
buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    console.log("hit");
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active].forEach(function (activeSlide) {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;
      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 3000);
  };
  repeater();
};
repeat();

var shopContainers = document.querySelectorAll(".shop-container-menu");
var modalContainer = document.querySelector(".modal-container");
var modalParents = document.querySelectorAll(".modal-parent");

if (shopContainers && modalContainer) {
  shopContainers.forEach(function (shopContainer, index) {
    shopContainer.addEventListener("click", function () {
      modalContainer.style.visibility = "visible";
      modalContainer.style.opacity = 1;
      modalParents[index].style.visibility = "visible";
    });
  });

  modalContainer.addEventListener("click", function (e) {
    if (e.target !== this) {
      return;
    }
    modalContainer.style.visibility = "hidden";
    modalContainer.style.opacity = 0;
    modalParents.forEach(function (modalParent) {
      modalParent.style.visibility = "hidden";
    });
  });
}
