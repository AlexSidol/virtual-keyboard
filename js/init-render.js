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
  <ul id="digit-line" class="keyboard__list"></ul>
  <ul id="first-line" class="keyboard__list"></ul>
  <ul id="second-line" class="keyboard__list"></ul>
  <ul id="third-line" class="keyboard__list"></ul>
  <ul id="fourth-line" class="keyboard__list special"></ul>
</section>
</main>
`;

bodyEL.innerHTML = initialMarkup;
