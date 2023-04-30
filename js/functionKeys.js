import { digit } from "./data/data.js";
import { first } from "./data/first-line.js";
import { second } from "./data/second-line.js";
import { third } from "./data/third-line.js";

import {
  renderDigitPanel,
  renderFirstPanel,
  renderSecondPanel,
  renderThirdPanel,
} from "./keyboard-render.js";

const areaEl = document.querySelector("#area");

export function changeCapsLock(el) {
  const lang = localStorage.getItem("lang");
  if (el.classList.contains("active")) {
    // console.log("відрендерити big літери");
    renderFirstPanel(first, "Caps Lock", "big", lang);
    renderSecondPanel(second, "Caps Lock", "big", lang);
    renderThirdPanel(third, "Caps Lock", "big", lang);
  } else {
    // console.log("відрендерити small літери");
    renderFirstPanel(first, "Caps Lock", "small", lang);
    renderSecondPanel(second, "Caps Lock", "small", lang);
    renderThirdPanel(third, "Caps Lock", "small", lang);
  }
}

export function shiftLeftClickProcessing(el) {
  const lang = localStorage.getItem("lang");
  if (el.classList.contains("active")) {
    // console.log("відрендерити big літери");
    renderDigitPanel(digit, "Shift", "big", lang);
    renderFirstPanel(first, "Shift", "big", lang);
    renderSecondPanel(second, "Shift", "big", lang);
    renderThirdPanel(third, "Shift", "big", lang);
  } else {
    // console.log("відрендерити small літери");
    renderDigitPanel(digit, "Shift", "small", lang);
    renderFirstPanel(first, "Shift", "small", lang);
    renderSecondPanel(second, "Shift", "small", lang);
    renderThirdPanel(third, "Shift", "small", lang);
  }
}

export function removeElBackspace() {
  let start = areaEl.selectionStart;

  // console.log("start", start);
  let end = areaEl.selectionEnd;
  // console.log("end", end);
  if (start === end && start > 0) {
    let text = areaEl.value;
    let newText = text.slice(0, start - 1) + text.slice(start);
    areaEl.value = newText;
    areaEl.selectionStart = start - 1;
    areaEl.selectionEnd = start - 1;
  }
}

// click DEL
export function deleteClickProcessing() {
  let start = areaEl.selectionStart;
  let end = areaEl.selectionEnd;
  if (start === end && start > 0) {
    let text = areaEl.value;
    let newText = text.slice(0, start) + text.slice(start + 1);
    areaEl.value = newText;
    areaEl.selectionStart = start;
    areaEl.selectionEnd = start;
  }
}

// click ENTER
export function enterClickProcessing() {
  let start = areaEl.selectionStart;
  let end = areaEl.selectionEnd;
  if (start === end) {
    let text = areaEl.value;
    let newText = text.slice(0, start) + "\n" + text.slice(start);
    areaEl.value = newText;
    areaEl.selectionStart = start + 1;
    areaEl.selectionEnd = start + 1;
  }
}

// Press Arrow Left
export function arrowLeftProcessing() {
  // write code here
}

// Press Arrow Right
export function arrowRightProcessing() {
  // write code here
}

// Press Arrow Up
export function arrowUpProcessing() {
  // write code here
}

// Press Arrow Down
export function arrowDownProcessing() {
  // write code here
}
