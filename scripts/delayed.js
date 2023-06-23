// eslint-disable-next-line import/no-cycle
import { sampleRUM } from "./lib-franklin.js";

// Core Web Vitals RUM collection
sampleRUM("cwv");

// add more delayed functionality here
var x = document.querySelectorAll(".isi-content >div");
x[1].classList.add("isitext");

var xa = document.querySelector(".isi-content a");

xa.addEventListener("click", function () {
  x[1].classList.remove("isitext");
});
