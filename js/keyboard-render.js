const digitLineEl = document.querySelector("#digit-line");
const firstLineEl = document.querySelector("#first-line");
const secondLineEl = document.querySelector("#second-line");
const thirdLineEl = document.querySelector("#third-line");

function createMarkup(arr, symbolCase) {
  let lang = localStorage.getItem("lang");

  return arr
    .map((el) => {
      if (symbolCase === "lowercase" && lang === "en") {
        return `<span class="keyboard__item" data-code=${el.code}>${el.keySmall}</span>`;
      }
      if (symbolCase === "UPPERCASE" && lang === "en") {
        return `<span class="keyboard__item" data-code=${el.code}>${el.keyBig}</span>`;
      }
      if (symbolCase === "lowercase" && lang === "ua") {
        return `<span class="keyboard__item" data-code=${el.code}>${el.keySmallUa}</span>`;
      }
      if (symbolCase === "UPPERCASE" && lang === "ua") {
        return `<span class="keyboard__item" data-code=${el.code}>${el.keyBigUa}</span>`;
      }
    })
    .join("");
}

export function renderDigitPanel(arr) {
  let symbolCase = localStorage.getItem("digitCase");
  digitLineEl.innerHTML = createMarkup(arr, symbolCase);
}

export function renderFirstPanel(arr) {
  let symbolCase = localStorage.getItem("letterCase");
  firstLineEl.innerHTML = createMarkup(arr, symbolCase);
}

export function renderSecondPanel(arr) {
  let symbolCase = localStorage.getItem("letterCase");
  secondLineEl.innerHTML = createMarkup(arr, symbolCase);
}

export function renderThirdPanel(arr) {
  let symbolCase = localStorage.getItem("letterCase");
  thirdLineEl.innerHTML = createMarkup(arr, symbolCase);
}
