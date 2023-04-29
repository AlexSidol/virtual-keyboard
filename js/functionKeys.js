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
  if (el.classList.contains("active")) {
    // console.log("відрендерити big літери");
    renderFirstPanel(first, "Caps Lock", "big");
    renderSecondPanel(second, "Caps Lock", "big");
    renderThirdPanel(third, "Caps Lock", "big");
  } else {
    // console.log("відрендерити small літери");
    renderFirstPanel(first, "Caps Lock", "small");
    renderSecondPanel(second, "Caps Lock", "small");
    renderThirdPanel(third, "Caps Lock", "small");
  }
}

export function shiftLeftClickProcessing(el) {
  // console.log('el :>> ', el);
  // console.log('el.classList.contains("active") :>> ', el.classList.contains("active"));
  // console.log("I clicked on the SHIFT");
  if (el.classList.contains("active")) {
    // console.log("відрендерити big літери");
    renderDigitPanel(digit, "Shift", "big");
    renderFirstPanel(first, "Shift", "big");
    renderSecondPanel(second, "Shift", "big");
    renderThirdPanel(third, "Shift", "big");
  } else {
    // console.log("відрендерити small літери");
    renderDigitPanel(digit, "Shift", "small");
    renderFirstPanel(first, "Shift", "small");
    renderSecondPanel(second, "Shift", "small");
    renderThirdPanel(third, "Shift", "small");
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
