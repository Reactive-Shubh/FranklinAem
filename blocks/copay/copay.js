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

const accord = document.getElementsByClassName("container");

for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
