const digitLineEl = document.querySelector("#digit-line");
const firstLineEl = document.querySelector("#first-line");
const secondLineEl = document.querySelector("#second-line");
const thirdLineEl = document.querySelector("#third-line");
// const fourthLineEl = document.querySelector("#fourth-line");

function createMarkup(arr, key, act, lang) {
  let action = checkKeys(key, act);
  return arr
    .map((el) => {
      if (action === "small" && lang === "en") {
        return `<span class="keyboard__item " data-key=${el.keySmall}>${el.keySmall}</span>`;
      }
      if (action === "big" && lang === "en") {
        return `<span class="keyboard__item " data-key=${el.keyBig}>${el.keyBig}</span>`;
      }
      if (action === "small" && lang === "ua") {
        return `<span class="keyboard__item " data-key=${el.keySmallUa}>${el.keySmallUa}</span>`;
      }
      if (action === "big" && lang === "ua") {
        return `<span class="keyboard__item " data-key=${el.keyBigUa}>${el.keyBigUa}</span>`;
      }
    })
    .join("");
}

export function renderDigitPanel(arr, key, act, lang) {
  digitLineEl.innerHTML = createMarkup(arr, key, act, lang);
}

export function renderFirstPanel(arr, key, act, lang) {
  firstLineEl.innerHTML = createMarkup(arr, key, act, lang);
}

export function renderSecondPanel(arr, key, act, lang) {
  secondLineEl.innerHTML = createMarkup(arr, key, act, lang);
}

export function renderThirdPanel(arr, key, act, lang) {
  thirdLineEl.innerHTML = createMarkup(arr, key, act, lang);
}

function checkKeys(key, act) {
  // console.log('key :>> ', key);
  // console.log('act :>> ', act);
  let action = "small";

  // Перевірка на натискання на фізичній клаві SHIFT вниз
  if ((key === "ShiftLeft" || key === "ShiftRight") && act === "keydown") {
    action = "big";
  } else {
    action = "small";
  }

  // Перевірка на клік по віртуальній клаві CAPS LOCK
  if (key === "Caps Lock" && act === "big") {
    action = "big";
    return action;
  }
  if (key === "Caps Lock" && act === "small") {
    action = "small";
    return action;
  }

  // Перевірка на клік по віртуальній клаві SHIFT
  if (key === "Shift" && act === "big") {
    action = "big";
    return action;
  }
  if (key === "Shift" && act === "small") {
    action = "small";
    return action;
  }

  return action;
}
