const bodyEL = document.querySelector("#body");

const initialMarkup = `
<header class="container">
<h1 class="title">RSS virtual keyboard</h1>
</header>
<main class="container">
<section class="screen">
  <textarea
    class="screen__area"
    name="area"
    id="area"
    cols="105"
    rows="10"
  ></textarea>
</section>

<section class="keyboard">
<div class="keyboard__list">
  <div id="digit-line" class="keyboard__list"></div>
  <span class="keyboard__item backspace" data-key="Backspace">Backspace</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item tab" data-key="Tab">Tab</span>
  <div id="first-line" class="keyboard__list"></div>
  <span class="keyboard__item del" data-key="Delete">Del</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item capsLock" data-key="CapsLock">Caps Lock</span>
  <div id="second-line" class="keyboard__list"></div>
  <span class="keyboard__item enter" data-key="Enter">Enter</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item shift-right" data-key="ShiftLeft">Shift</span>
  <div id="third-line" class="keyboard__list"></div>
  <span class="special_item erow" data-key="ArrowUp">▲</span>
  <span class="keyboard__item shift" data-key="ShiftRight">Shift</span>
</div>
<div id="fourth-line" class="keyboard__list special">
  <span class="special_item ctrl" data-key="ControlLeft">Ctrl</span>
  <span class="special_item " data-key="MetaLeft">Win</span>
  <span class="special_item" data-key="AltLeft">Alt</span>
  <span class="special_item space" data-key="Space">&#32;</span>
  <span class="special_item" data-key="AltRight">Alt</span>
  <span class="special_item" data-key="ArrowLeft">◀ </span>
  <span class="special_item" data-key="ArrowDown">▼</span>
  <span class="special_item" data-key="ArrowRight">▶</span>
  <span class="special_item ctrl" data-key="ControlRight">Ctrl</span>
</div>
</section>
</main>
`;

bodyEL.innerHTML = initialMarkup;
