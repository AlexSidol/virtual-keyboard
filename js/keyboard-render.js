const digitLineEl = document.querySelector("#digit-line");
const firstLineEl = document.querySelector("#first-line");
const secondLineEl = document.querySelector("#second-line");
const thirdLineEl = document.querySelector("#third-line");
// const fourthLineEl = document.querySelector("#fourth-line");

function createMarkup(arr, key, act) {
  let action = checkKeys(key, act);
  return arr
    .map((el) => {
      return `<span class="keyboard__item">${el[action]}</span>`;
    })
    .join("");
}

export function renderDigitPanel(arr, key, act) {
  digitLineEl.innerHTML = createMarkup(arr, key, act);
}

export function renderFirstPanel(arr, key, act) {
  firstLineEl.innerHTML = createMarkup(arr, key, act);
}

export function renderSecondPanel(arr, key, act) {
  secondLineEl.innerHTML = createMarkup(arr, key, act);
}

export function renderThirdPanel(arr, key, act) {
  thirdLineEl.innerHTML = createMarkup(arr, key, act);
}

function checkKeys(key, act) {
  let action = "keySmall";

  // Перевірка на натискання на фізичній клаві SHIFT вниз
  if ((key === "ShiftLeft" || key === "ShiftRight") && act === "keydown") {
    action = "keyBig";
  } else {
    action = "keySmall";
  }

  // Перевірка на клік по віртуальній клаві CAPS LOCK
  if (key === "Caps Lock" && act === "big") {
    action = "keyBig";
    return action;
  }
  if (key === "Caps Lock" && act === "small") {
    action = "keySmall";
    return action;
  }

  // Перевірка на клік по віртуальній клаві SHIFT
  if (key === "Shift" && act === "big") {
    action = "keyBig";
    return action;
  }
  if (key === "Shift" && act === "small") {
    action = "keySmall";
    return action;
  }

  return action;
}
