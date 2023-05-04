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
  <span class="keyboard__item backspace" data-code="Backspace">Backspace</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item tab" data-code="Tab">Tab</span>
  <div id="first-line" class="keyboard__list"></div>
  <span class="keyboard__item del" data-code="Delete">Del</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item capsLock" data-code="CapsLock">Caps Lock</span>
  <div id="second-line" class="keyboard__list"></div>
  <span class="keyboard__item enter" data-code="Enter">Enter</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item shift-right" data-code="ShiftLeft">Shift</span>
  <div id="third-line" class="keyboard__list"></div>
  <span class="special_item erow" data-code="ArrowUp">▲</span>
  <span class="keyboard__item shift" data-code="ShiftRight">Shift</span>
</div>
<div id="fourth-line" class="keyboard__list special">
  <span class="special_item ctrl" data-code="ControlLeft">Ctrl</span>
  <span class="special_item " data-code="MetaLeft">Win</span>
  <span class="special_item" data-code="AltLeft">Alt</span>
  <span class="special_item space" data-code="Space">&#32;</span>
  <span class="special_item" data-code="AltRight">Alt</span>
  <span class="special_item" data-code="ArrowLeft">◀ </span>
  <span class="special_item" data-code="ArrowDown">▼</span>
  <span class="special_item" data-code="ArrowRight">▶</span>
  <span class="special_item ctrl" data-code="ControlRight">Ctrl</span>
</div>
</section>
<p class="text-info">The keyboard was created in the Windows operating system</p>
<p class="text-info">Use the keys ctr+alt to switch the language</p>
</main>
`;

bodyEL.innerHTML = initialMarkup;
