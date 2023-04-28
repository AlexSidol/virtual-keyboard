import { digit } from "./data/data.js";
import { first } from "./data/first-line.js";
import { second } from "./data/second-line.js";
import { third } from "./data/third-line.js";

import {
  renderDigitPanel,
  renderFirstPanel,
  renderSecondPanel,
  renderThirdPanel,
  renderLastPanel,
} from "./keyboard-render.js";

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
renderLastPanel();

const areaEl = document.querySelector("#area");

function clickUp(evt) {
  if (!evt.target.closest("li")) {
    return;
  }
  let currentKey = evt.target.closest("li").innerText;

  if (evt.target.closest("li") && currentKey === "Caps Lock") {
    return;
  }
  let currentLi = evt.target.closest("li");
  if (currentLi.classList.contains("active")) {
    currentLi.classList.remove("active");
  }
}

function clickDown(evt) {
  if (!evt.target.closest("li")) {
    return;
  }
  let currentKey = evt.target.closest("li").innerText;
  let currentLi = evt.target.closest("li");

  if (currentLi.classList.contains("active")) {
    currentLi.classList.remove("active");
  } else {
    currentLi.classList.add("active");
  }
  let inputText = areaEl.value;
  console.log(inputText);
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
      // потрібно викликати функцію
      changeCapsLock(currentLi);
      break;

    default:
      areaEl.value += currentKey;
  }

  // console.log(currentKey);
}

function pushSpecialKey(evt) {
  console.log("evt", evt);
  // console.log("curTar", evt.currentTarget);
  if (evt.key === "Enter") {
    console.log("в if", areaEl.value);
    areaEl.value += "\nf";
  } else {
    console.log("вийшла з if");
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

export function checkKeys(key, act) {
  let action = "keySmall";
  if ((key === "ShiftLeft" || key === "ShiftRight") && act === "keydown") {
    action = "keyBig";
  } else {
    action = "keySmall";
  }
  return action;
}

function changeCapsLock(el) {
  if (el.classList.contains("active")) {
    console.log("відрендерити big літери");
  } else {
    console.log("відрендерити small літери");
  }

  // renderFirstPanel(first, evt.code, evt.type);
  // renderSecondPanel(second, evt.code, evt.type);
  // renderThirdPanel(third, evt.code, evt.type);
}

function removeElBackspace() {
  let start = areaEl.selectionStart;

  console.log("start", start);
  let end = areaEl.selectionEnd;
  console.log("end", end);
  if (start === end && start > 0) {
    let text = areaEl.value;
    let newText = text.slice(0, start - 1) + text.slice(start);
    areaEl.value = newText;
    areaEl.selectionStart = start - 1;
    areaEl.selectionEnd = start - 1;
  }
}
