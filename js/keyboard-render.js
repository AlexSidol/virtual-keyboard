import { checkKeys } from "./index.js";

const digitLineEl = document.querySelector("#digit-line");
const firstLineEl = document.querySelector("#first-line");
const secondLineEl = document.querySelector("#second-line");
const thirdLineEl = document.querySelector("#third-line");
const fourthLineEl = document.querySelector("#fourth-line");

export function renderDigitPanel(arr, key, act) {
  let action = checkKeys(key, act);

  const markup =
    arr
      .map((el) => {
        return `<li class="keyboard__item">${el[action]}</li>`;
      })
      .join("") + `<li class="keyboard__item backspace">Backspace</li>`;

  digitLineEl.innerHTML = markup;
}

export function renderFirstPanel(arr, key, act) {
  let action = checkKeys(key, act);

  const draft =
    arr
      .map((el) => {
        return `<li class="keyboard__item">${el[action]}</li>`;
      })
      .join("") + `<li class="keyboard__item del">Del</li>`;

  const markupfirst = `<li class="keyboard__item tab">Tab</li>` + draft;
  firstLineEl.innerHTML = markupfirst;
}

export function renderSecondPanel(arr, key, act) {
  let action = checkKeys(key, act);

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

export function renderThirdPanel(arr, key, act) {
  let action = checkKeys(key, act);

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

export function renderLastPanel() {
  const markuplast = `
            <li class="special_item ctrl">Ctrl</li>
            <li class="special_item ">Win</li>
            <li class="special_item">Alt</li>
            <li class="special_item space"></li>
            <li class="special_item">Alt</li>
            <li class="special_item">◀ </li>
            <li class="special_item">▼</li>
            <li class="special_item">▶</li>
            <li class="special_item ctrl">Ctrl</li>`;

  fourthLineEl.innerHTML = markuplast;
}
