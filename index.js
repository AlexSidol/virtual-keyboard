import { digit } from "./js/data.js";
import { first } from "./js/first-line.js";

const digitLineEl = document.querySelector("#digit-line");
const firstLineEl = document.querySelector("#first-line");
const secondLineEl = document.querySelector("#second-line");
const thirdLineEl = document.querySelector("#third-line");
const fourthLineEl = document.querySelector("#fourth-line");

function renderDigitPanel(arr, key, act) {
  console.log(key);
  let indicator = key;
  let action = act;
  if ((key === "ShiftLeft" || key === "ShiftRight") && act === "keydown") {
    action = "keyBig";
  } else {
    action = "keySmall";
  }
  console.log(indicator);

  const markup =
    arr
      .map((el) => {
        return `<li class="keyboard__item">${el[action]}</li>`;
      })
      .join("") + `<li class="keyboard__item backspace">Backspace</li>`;

  // const markupBackspace = <li class="keyboard__item backspace"></li>
  digitLineEl.innerHTML = markup;
  //   const backspaceEl = document.querySelector();
}

renderDigitPanel(digit);

document.addEventListener("keydown", pushKeydown);
// document.addEventListener("keyup", pushKeyup);

function pushKeydown(evt) {
  console.log(evt);

  renderDigitPanel(digit, evt.code, evt.type);
  renderFirstPanel(first, evt.code, evt.type);
  document.removeEventListener("keydown", pushKeydown);
  document.addEventListener("keyup", pushKeyup);
}

function pushKeyup(evt) {
  console.log(evt);
  renderDigitPanel(digit, evt.code, evt.type);
  renderFirstPanel(first, evt.code, evt.type);
  document.removeEventListener("keyup", pushKeyup);
  document.addEventListener("keydown", pushKeydown);
}

function renderFirstPanel(arr, key, act) {
  console.log(key);
  let indicator = key;
  let action = act;
  if ((key === "ShiftLeft" || key === "ShiftRight") && act === "keydown") {
    action = "keyBig";
  } else {
    action = "keySmall";
  }
  console.log(indicator);

  const markupfirst =
    arr
      .map((el) => {
        return `<li class="keyboard__item">${el[action]}</li>`;
      })
      .join("") + `<li class="keyboard__item del">Del</li>`;

  const draft = `<li class="keyboard__item Tab">Tab</li>` + markupfirst;
  firstLineEl.innerHTML = draft;
}

renderFirstPanel(first);
