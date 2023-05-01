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
    localStorage.setItem("letterCase", "UPPERCASE");
    renderFirstPanel(first);
    renderSecondPanel(second);
    renderThirdPanel(third);
  } else {
    localStorage.setItem("letterCase", "lowercase");
    renderFirstPanel(first);
    renderSecondPanel(second);
    renderThirdPanel(third);
  }
}

export function changeCapsLockClick(el) {
  if (localStorage.getItem("letterCase") === "lowercase") {
    localStorage.setItem("letterCase", "UPPERCASE");
    el.classList.add("active");

    renderFirstPanel(first);
    renderSecondPanel(second);
    renderThirdPanel(third);
  } else {
    localStorage.setItem("letterCase", "lowercase");
    el.classList.remove("active");

    renderFirstPanel(first);
    renderSecondPanel(second);
    renderThirdPanel(third);
  }
}

export function shiftLeftClickProcessing(el) {
  const lang = localStorage.getItem("lang");
  if (
    el.classList.contains("active") ||
    localStorage.getItem("letterCase") === "UPPERCASE"
  ) {
    renderDigitPanel(digit);
    renderFirstPanel(first);
    renderSecondPanel(second);
    renderThirdPanel(third);
  } else {
    renderDigitPanel(digit);
    renderFirstPanel(first);
    renderSecondPanel(second);
    renderThirdPanel(third);
  }
}

export function removeElBackspace(evt) {
  let start = areaEl.selectionStart;

  let end = areaEl.selectionEnd;
  if (start === end && start > 0 && evt) {
    return;
  }

  if (start === end && start > 0 && !evt) {
    let text = areaEl.value;
    let newText = text.slice(0, start - 1) + text.slice(start);
    areaEl.value = newText;
    areaEl.selectionStart = start - 1;
    areaEl.selectionEnd = start - 1;
  }
}

// click DEL
export function deleteClickProcessing(evt) {
  let start = areaEl.selectionStart;
  let end = areaEl.selectionEnd;

  if (start === end && start > 0) {
    let text = areaEl.value;
    let newText = text.slice(0, start) + text.slice(start + 1);
    areaEl.value = newText;
    areaEl.selectionStart = start;
    areaEl.selectionEnd = start;
  }

  if (start !== end) {
    let text = areaEl.value;
    let newText = text.slice(0, start) + text.slice(end);
    // let newText = text.slice(start, end);
    evt.preventDefault();
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

export function spaceClickProcessing(evt) {
  let start = areaEl.selectionStart;
  if (start !== areaEl.value.length) {
    let text = areaEl.value;
    let newText = text.slice(0, start) + " " + text.slice(start);
    evt.preventDefault();
    areaEl.value = newText;
    areaEl.selectionStart = start + 1;
    areaEl.selectionEnd = start + 1;
  } else {
    areaEl.value += " ";
    evt.preventDefault();
  }
}

export function tabClickProcessing(evt) {
  let start = areaEl.selectionStart;

  if (start !== areaEl.value.length) {
    let text = areaEl.value;
    let newText = text.slice(0, start) + "    " + text.slice(start);
    evt.preventDefault();
    areaEl.value = newText;
    areaEl.selectionStart = start + 4;
    areaEl.selectionEnd = start + 4;
  } else {
    areaEl.value += "    ";
    evt.preventDefault();
  }
}
