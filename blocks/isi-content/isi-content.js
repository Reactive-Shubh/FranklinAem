import { createOptimizedPicture } from "../../scripts/lib-franklin.js";
/**
 * loads and decorates the ISI
 * @param {Element) block The isi block element
 */
export default function decorate(block) {
  /* change to ul, li */
  block.children[0].className = "isi-content-header";
  block.children[1].className = "isi-content-content";
  const d = block;
  d.classList.add("isi-content-collapse");
  const b = block.firstElementChild.children[0];
  block.children[0].children[0].className = "isi-information-saftey";
  block.children[0].children[1].className = "isi-indication";

  const abc = document.createElement("button");
  const btextspan = document.createElement("span");
  const buttonicon = document.createElement("span");
  buttonicon.className = "add-icon";

  btextspan.textContent = "Expand";
  abc.addEventListener("click", () => {
    if (abc.textContent === "Expand") {
      d.classList.remove("isi-content-collapse");
      d.classList.add("isi-content-expanded");
      buttonicon.className = "close-icon";
      btextspan.textContent = "Close";
    } else {
      d.classList.remove("isi-content-expanded");
      d.classList.add("isi-content-collapse");
      buttonicon.className = "add-icon";
      btextspan.textContent = "Expand";
    }
  });

  abc.append(btextspan);
  abc.append(buttonicon);
  b.append(abc);
}
