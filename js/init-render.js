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
<section class="keyboard">
<div class="keyboard__list">
  <div id="digit-line" class="keyboard__list"></div>
  <span class="keyboard__item backspace">Backspace</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item tab">Tab</span>
  <div id="first-line" class="keyboard__list"></div>
  <span class="keyboard__item del">Del</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item capsLock">Caps Lock</span>
  <div id="second-line" class="keyboard__list"></div>
  <span class="keyboard__item enter">Enter</span>
</div>
<div class="keyboard__list">
  <span class="keyboard__item shift-right">Shift</span>
  <div id="third-line" class="keyboard__list"></div>
  <span class="keyboard__item erow">▲</span>
  <span class="keyboard__item shift">Shift</span>
</div>
<div id="fourth-line" class="keyboard__list special">
<span class="special_item ctrl">Ctrl</span>
<span class="special_item ">Win</span>
<span class="special_item">Alt</span>
<span class="special_item space">&#32;</span>
<span class="special_item">Alt</span>
<span class="special_item">◀ </span>
<span class="special_item">▼</span>
<span class="special_item">▶</span>
<span class="special_item ctrl">Ctrl</span>
</div>
</section>
</main>
`;

bodyEL.innerHTML = initialMarkup;
