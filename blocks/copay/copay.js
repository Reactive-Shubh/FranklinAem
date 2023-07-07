var xyz = document.querySelectorAll(".accordion >div");
// var abc = document.querySelector(".accordion div").firstElementChild;
// var bca = document.querySelector(".accordion div").lastElementChild;
for (var i = 0; i < xyz.length; i++) {
  xyz[i].classList.add("container");
}

var ab = document.querySelectorAll(".accordion .container div");

for (var i = 0; i < ab.length; i++) {
  if (i % 2 == 0) {
    ab[i].classList.add("question");
  } else {
    ab[i].classList.add("answer");
  }
}

// abc.classList.add("question");
// bca.classList.add("answer");

const acc = document.getElementsByClassName("container");

// for (i = 0; i < accord.length; i++) {
//   accord[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

var panels = document.getElementsByClassName("question");
var i;
var j;

var handleAccordionClick = function () {
  for (j = 0; j < panels.length; j++) {
    acc[j].classList.remove("active");
  }
  this.classList.toggle("active");
};

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = handleAccordionClick;
}

var a = document.querySelector(".copay .button-container a");
var b = document.querySelector(".popup .parent2 a");

a.setAttribute(
  "href",
  "aemtestpoc--mspilotsandbox--pfizer.hlx.page/AemTest-POC-Shubham/testpage"
);
b.setAttribute(
  "href",
  "aemtestpoc--mspilotsandbox--pfizer.hlx.page/AemTest-POC-Shubham/testpage"
);
