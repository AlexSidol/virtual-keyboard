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

import {
  removeElBackspace,
  deleteClickProcessing,
  enterClickProcessing,
  changeCapsLock,
  shiftLeftClickProcessing,
  arrowLeftProcessing,
  arrowRightProcessing,
  arrowUpProcessing,
  arrowDownProcessing,
} from "./functionKeys.js";

localStorage.setItem("lang", "en");

const keyboardEl = document.querySelector(".keyboard");

document.addEventListener("keydown", pushKeydown);
// document.addEventListener("click", inputText);
document.addEventListener("keypress", pushSpecialKey);

keyboardEl.addEventListener("mousedown", clickDown);
keyboardEl.addEventListener("mouseup", clickUp);

const lang = localStorage.getItem("lang");

renderDigitPanel(digit, null, null, lang);
renderFirstPanel(first, null, null, lang);
renderSecondPanel(second, null, null, lang);
renderThirdPanel(third, null, null, lang);

const areaEl = document.querySelector("#area");

function clickUp(evt) {
  if (!evt.target.closest("span")) {
    return;
  }
  let currentKey = evt.target.closest("span").innerText;

  if (evt.target.closest("span") && currentKey === "Caps Lock") {
    return;
  }

  let currentDIV = evt.target.closest("span");

  if (currentDIV.classList.contains("active") && currentKey === "Shift") {
    currentDIV.classList.remove("active");
    shiftLeftClickProcessing(currentDIV);
    return;
  }
  if (currentDIV.classList.contains("active")) {
    currentDIV.classList.remove("active");
  }
}

function clickDown(evt) {
  if (!evt.target.closest("span")) {
    return;
  }
  let currentKey = evt.target.closest("span").innerText;

  let currentDIV = evt.target.closest("span");

  if (currentDIV.classList.contains("active")) {
    currentDIV.classList.remove("active");
  } else {
    currentDIV.classList.add("active");
  }

  switch (currentKey) {
    case "":
      areaEl.value += " ";
      break;

    case "Tab":
      areaEl.value += "    ";
      break;

    case "Ctrl":
      break;

    case "Win":
      break;

    case "Alt":
      break;

    case "Backspace":
      removeElBackspace();
      break;

    case "Caps Lock":
      changeCapsLock(currentDIV);
      break;

    case "Del":
      deleteClickProcessing();
      break;

    case "Enter":
      enterClickProcessing();
      break;

    case "Shift":
      shiftLeftClickProcessing(currentDIV);
      break;

    case "◀":
      arrowLeftProcessing();
      break;

    case "▶":
      arrowRightProcessing();
      break;

    case "▲":
      arrowUpProcessing();
      break;

    case "▼":
      arrowDownProcessing();
      break;

    default:
      areaEl.value += currentKey;
  }

  // console.log(currentKey);
}

function pushSpecialKey(evt) {
  console.log("evt", evt.key);

  let nowPushKey = evt.key;
  light(nowPushKey, "down");

  if (evt.key === "Enter" && evt.target === body) {
    // console.log("evt.currentTarget", evt.currentTarget);

    areaEl.value += "\n";
  } else if (evt.key === "Enter") {
    return;
  } else {
    areaEl.value += evt.key;
  }
}

export function pushKeydown(evt) {
  const lang = localStorage.getItem("lang");
  renderDigitPanel(digit, evt.code, evt.type, lang);
  renderFirstPanel(first, evt.code, evt.type, lang);
  renderSecondPanel(second, evt.code, evt.type, lang);
  renderThirdPanel(third, evt.code, evt.type, lang);

  light(evt.code, "down");

  if (
    (evt.code === "ControlLeft" && evt.altKey) ||
    (evt.code === "AltLeft" && evt.ctrlKey)
  ) {
    langSwitch();
  }
  // document.removeEventListener("keydown", pushKeydown);
  document.addEventListener("keyup", pushKeyup);
  switch (evt.key) {
    case "":
      areaEl.value += " ";
      break;

    case "Tab":
      areaEl.value += "    ";
      break;

    case "Control":
      break;

    case "Meta":
      break;

    case "Alt":
      break;

    case "Backspace":
      removeElBackspace();
      break;

    case "CapsLock":
      // changeCapsLock(currentDIV);
      break;

    case "Delete":
      deleteClickProcessing();
      break;

    case "Enter":
      enterClickProcessing();
      break;

    case "Shift":
      // shiftLeftClickProcessing(currentDIV);
      break;

    case "ArrowLeft":
      arrowLeftProcessing();
      break;

    case "ArrowRight":
      arrowRightProcessing();
      break;

    case "ArrowUp":
      arrowUpProcessing();
      break;

    case "ArrowDown":
      arrowDownProcessing();
      break;

    default:
      break;
  }
}

export function pushKeyup(evt) {
  const lang = localStorage.getItem("lang");

  renderDigitPanel(digit, evt.code, evt.type, lang);
  renderFirstPanel(first, evt.code, evt.type, lang);
  renderSecondPanel(second, evt.code, evt.type, lang);
  renderThirdPanel(third, evt.code, evt.type, lang);
  // -----------------------------------------------

  light(evt.code, "up");
  // document.removeEventListener("keyup", pushKeyup);
  document.addEventListener("keydown", pushKeydown);
}

function light(PushEl, position) {
  const virtualButton = document.querySelector(`span[data-key="${PushEl}"]`);

  // console.log(virtualButton);

  if (virtualButton && position === "down") {
    virtualButton.classList.add("active"); // подсвечиваем кнопку
    return;
  }
  if (virtualButton && position === "up") {
    virtualButton.classList.remove("active");
  }
}

function langSwitch() {
  const lang = localStorage.getItem("lang");
  // console.log(lang);

  if (lang === "en") {
    console.log("I switch to Ukrainian");
    localStorage.setItem("lang", "ua");
    return;
  }
  if (lang === "ua") {
    console.log("I switch to English");
    localStorage.setItem("lang", "en");
    return;
  }
}
