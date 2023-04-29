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
} from "./functionKeys.js";

const keyboardEl = document.querySelector(".keyboard");

document.addEventListener("keydown", pushKeydown);
// document.addEventListener("click", inputText);
document.addEventListener("keypress", pushSpecialKey);

keyboardEl.addEventListener("mousedown", clickDown);
keyboardEl.addEventListener("mouseup", clickUp);

renderDigitPanel(digit);
renderFirstPanel(first);
renderSecondPanel(second);
renderThirdPanel(third);

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

    default:
      areaEl.value += currentKey;
  }

  // console.log(currentKey);
}

function pushSpecialKey(evt) {
  console.log("evt", evt.key);

  let nowPushKey = evt.key;
  light(nowPushKey);

  if (evt.key === "Enter" && evt.target === body) {
    console.log("evt.currentTarget", evt.currentTarget);

    areaEl.value += "\n";
  } else if (evt.key === "Enter") {
    return;
  } else {
    areaEl.value += evt.key;
  }
}

export function pushKeydown(evt) {
  // console.log(evt);
  // areaEl.textContent += evt.key;
  renderDigitPanel(digit, evt.code, evt.type);
  renderFirstPanel(first, evt.code, evt.type);
  renderSecondPanel(second, evt.code, evt.type);
  renderThirdPanel(third, evt.code, evt.type);
  light();
  document.removeEventListener("keydown", pushKeydown);
  document.addEventListener("keyup", pushKeyup);
}

export function pushKeyup(evt) {
  renderDigitPanel(digit, evt.code, evt.type);
  renderFirstPanel(first, evt.code, evt.type);
  renderSecondPanel(second, evt.code, evt.type);
  renderThirdPanel(third, evt.code, evt.type);
  document.removeEventListener("keyup", pushKeyup);
  document.addEventListener("keydown", pushKeydown);
}

function light(PushEl) {
  const virtualButton = document.querySelector(`span[data-key="${PushEl}"]`);

  console.log(virtualButton);

  if (virtualButton) {
    virtualButton.classList.add("active"); // подсвечиваем кнопку
  }
}
