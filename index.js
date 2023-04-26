import { digit } from "./js/data.js";
import { first } from "./js/first-line.js";
import { second } from "./js/second-line.js";
import { third } from "./js/third-line.js";

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
  renderSecondPanel(second, evt.code, evt.type);
  renderThirdPanel(third, evt.code, evt.type);
  document.removeEventListener("keydown", pushKeydown);
  document.addEventListener("keyup", pushKeyup);
}

function pushKeyup(evt) {
  console.log(evt);
  renderDigitPanel(digit, evt.code, evt.type);
  renderFirstPanel(first, evt.code, evt.type);
  renderSecondPanel(second, evt.code, evt.type);
  renderThirdPanel(third, evt.code, evt.type);
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

  const draft =
    arr
      .map((el) => {
        return `<li class="keyboard__item">${el[action]}</li>`;
      })
      .join("") + `<li class="keyboard__item del">Del</li>`;

  const markupfirst = `<li class="keyboard__item tab">Tab</li>` + draft;
  firstLineEl.innerHTML = markupfirst;
}

renderFirstPanel(first);

function renderSecondPanel(arr, key, act) {
  //   console.log(key);

  let action = act;
  if ((key === "ShiftLeft" || key === "ShiftRight") && act === "keydown") {
    action = "keyBig";
  } else {
    action = "keySmall";
  }

  const draft =
    arr
      .map((el) => {
        return `<li class="keyboard__item">${el[action]}</li>`;
      })
      .join("") + `<li class="keyboard__item enter">Enter</li>`;

  const markupsecond =
    `<li class="keyboard__item capsLock">Caps Lock</li>` + draft;
  secondLineEl.innerHTML = markupsecond;
}

renderSecondPanel(second);

function renderThirdPanel(arr, key, act) {
  //   console.log(key);

  let action = act;
  if ((key === "ShiftLeft" || key === "ShiftRight") && act === "keydown") {
    action = "keyBig";
  } else {
    action = "keySmall";
  }

  const draft =
    arr
      .map((el) => {
        return `<li class="keyboard__item">${el[action]}</li>`;
      })
      .join("") +
    `<li class="keyboard__item erow">▲</li>` +
    `<li class="keyboard__item shift">Shift</li>`;

  const markupthird =
    `<li class="keyboard__item shift-right">Shift</li>` + draft;
  thirdLineEl.innerHTML = markupthird;
}

renderThirdPanel(third);

function renderLastPanel() {
  //   console.log(key);

  const markuplast = `
          <li class="special_item ctrl">Ctrl</li>
          <li class="special_item ">"fn"</li>
          <li class="special_item">"Alt"</li>
          <li class="special_item space"></li>
          <li class="special_item">Alt</li>
          <li class="special_item">◀ </li>
          <li class="special_item">▼</li>
          <li class="special_item">▶</li>
          <li class="special_item ctrl">Ctrl</li>`;

  fourthLineEl.innerHTML = markuplast;
}
renderLastPanel();
