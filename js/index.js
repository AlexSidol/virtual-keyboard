import { digit } from "./data.js";
import { first } from "./first-line.js";
import { second } from "./second-line.js";
import { third } from "./third-line.js";

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
keyboardEl.addEventListener("click", inputText);

renderDigitPanel(digit);
renderFirstPanel(first);
renderSecondPanel(second);
renderThirdPanel(third);
renderLastPanel();

const areaEl = document.querySelector("#area");

function inputText(evt) {
  if (!evt.target.closest("li")) {
    return;
  } else {
    let currentKey = evt.target.closest("li").innerHTML;
    console.log("Проверка пройдена", currentKey);
    areaEl.value += currentKey;
  }
}

function pushSpecialKey(evt) {
  // console.log("evt", evt);
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
