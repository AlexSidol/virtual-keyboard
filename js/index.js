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
  spaceClickProcessing,
  tabClickProcessing,
  changeCapsLockClick,
} from "./functionKeys.js";

if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "en");
}
if (
  !localStorage.getItem("digitCase") ||
  localStorage.getItem("digitCase") !== "lowercase"
) {
  localStorage.setItem("digitCase", "lowercase");
}
if (
  !localStorage.getItem("letterCase") ||
  localStorage.getItem("letterCase") !== "lowercase"
) {
  localStorage.setItem("letterCase", "lowercase");
}

renderDigitPanel(digit);
renderFirstPanel(first);
renderSecondPanel(second);
renderThirdPanel(third);

const keyboardEl = document.querySelector(".keyboard");

document.addEventListener("keydown", pushKeydown);
document.addEventListener("keypress", pushSpecialKey);
keyboardEl.addEventListener("mousedown", clickDown);
keyboardEl.addEventListener("mouseup", clickUp);

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
    const virtualCapsLock = document.querySelector(
      `span[data-code="CapsLock"]`
    );
    if (virtualCapsLock.classList.contains("active")) {
      localStorage.setItem("letterCase", "UPPERCASE");
      shiftLeftClickProcessing(currentDIV);
    }
    currentDIV.classList.remove("active");
    localStorage.setItem("digitCase", "lowercase");
    localStorage.setItem("letterCase", "lowercase");
    shiftLeftClickProcessing(currentDIV);
    return;
  }

  if (currentDIV.classList.contains("active")) {
    if (currentKey !== "Caps Lock") {
      currentDIV.classList.remove("active");
    }
  }
}

function clickDown(evt) {
  if (!evt.target.closest("span")) {
    return;
  }
  let currentKey = evt.target.closest("span").innerText;

  let currentDIV = evt.target.closest("span");

  if (currentDIV.classList.contains("active")) {
    if (currentKey !== "Caps Lock" || currentKey !== "Shift") {
      currentDIV.classList.remove("active");
    }
  } else {
    if (currentKey !== "Caps Lock" || currentKey !== "Shift") {
      currentDIV.classList.add("active");
    }
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
      changeCapsLockClick(currentDIV);
      break;

    case "Del":
      deleteClickProcessing();
      break;

    case "Enter":
      enterClickProcessing();
      break;

    case "Shift":
      localStorage.setItem("digitCase", "UPPERCASE");
      localStorage.setItem("letterCase", "UPPERCASE");
      shiftLeftClickProcessing(currentDIV);

      const virtualCapsLock = document.querySelector(
        `span[data-code="CapsLock"]`
      );
      if (virtualCapsLock.classList.contains("active")) {
        localStorage.setItem("letterCase", "lowercase");
        shiftLeftClickProcessing(currentDIV);
      }
      break;

    case "◀":
      areaEl.value += "◀";
      break;

    case "▶":
      areaEl.value += "▶";
      break;

    case "▲":
      areaEl.value += "▲";
      break;

    case "▼":
      areaEl.value += "▼";
      break;

    default:
      areaEl.value += currentKey;
  }
}

function pushSpecialKey(evt) {
  let nowPushKey = evt.code;
  light(nowPushKey, "down");

  const virtualButton = document.querySelector(`span[data-code="${evt.code}"]`);

  let virtualLetter = virtualButton.innerText;

  if (evt.key === "Enter" && evt.target === body) {
    areaEl.value += "\n";
  } else if (evt.key === "Enter") {
    return;
  } else {
    let start = areaEl.selectionStart;
    if (start !== areaEl.value.length) {
      let text = areaEl.value;
      let newText = text.slice(0, start) + virtualLetter + text.slice(start);
      evt.preventDefault();
      areaEl.value = newText;
      areaEl.selectionStart = start + 1;
      areaEl.selectionEnd = start + 1;
    } else {
      areaEl.value += virtualLetter;
      evt.preventDefault();
    }
  }
}

export function pushKeydown(evt) {
  renderDigitPanel(digit);
  renderFirstPanel(first);
  renderSecondPanel(second);
  renderThirdPanel(third);

  light(evt.code, "down");

  if (
    (evt.code === "ControlLeft" && evt.altKey) ||
    (evt.code === "AltLeft" && evt.ctrlKey)
  ) {
    langSwitch();
  }

  const virtualButton = document.querySelector(`span[data-code="${evt.code}"]`);

  document.addEventListener("keyup", pushKeyup);

  switch (evt.code) {
    case "Space":
      evt.preventDefault();
      spaceClickProcessing(evt);
      break;

    case "Tab":
      evt.preventDefault();
      tabClickProcessing(evt);
      break;

    case "Control":
      break;

    case "Meta":
      break;

    case "Alt":
      break;

    case "Backspace":
      removeElBackspace(evt);
      break;

    case "CapsLock":
      if (virtualButton.classList.contains("active")) {
        virtualButton.classList.remove("active");
        changeCapsLock(virtualButton);
      } else {
        virtualButton.classList.add("active");
        changeCapsLock(virtualButton);
      }
      break;

    case "Delete":
      evt.preventDefault();
      deleteClickProcessing(evt);
      break;

    case "Enter":
      evt.preventDefault();
      enterClickProcessing();
      break;

    case "ShiftLeft":
      localStorage.setItem("digitCase", "UPPERCASE");
      localStorage.setItem("letterCase", "UPPERCASE");
      shiftLeftClickProcessing(virtualButton);

      const virtualCapsLock = document.querySelector(
        `span[data-code="CapsLock"]`
      );
      if (virtualCapsLock.classList.contains("active")) {
        localStorage.setItem("letterCase", "lowercase");
        shiftLeftClickProcessing(virtualButton);
      }
      break;

    default:
      break;
  }
}

export function pushKeyup(evt) {
  const virtualButton = document.querySelector(`span[data-code="${evt.code}"]`);
  let currentKey = virtualButton.innerText;

  evt.preventDefault();

  if (evt.code === "ShiftLeft" || evt.code === "ShiftRight") {
    const CapsLockEl = document.querySelector(`span[data-code="CapsLock"]`);
    if (CapsLockEl.classList.contains("active")) {
      const ShiftLeftEl = document.querySelector(`span[data-code="ShiftLeft"]`);
      ShiftLeftEl.classList.remove("active");

      localStorage.setItem("letterCase", "UPPERCASE");
      localStorage.setItem("digitCase", "lowercase");
      shiftLeftClickProcessing(virtualButton);
      return;
    }

    localStorage.setItem("letterCase", "lowercase");
    localStorage.setItem("digitCase", "lowercase");
  }

  if (virtualButton && currentKey === "CapsLock") {
    return;
  }

  renderDigitPanel(digit);
  renderFirstPanel(first);
  renderSecondPanel(second);
  renderThirdPanel(third);
  // -----------------------------------------------

  light(evt.code, "up");
  document.addEventListener("keydown", pushKeydown);
}

function light(PushEl, position) {
  const virtualButton = document.querySelector(`span[data-code="${PushEl}"]`);

  if (PushEl === "CapsLock") {
    return;
  }
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

  if (lang === "en") {
    localStorage.setItem("lang", "ua");
    return;
  }
  if (lang === "ua") {
    localStorage.setItem("lang", "en");
    return;
  }
}
