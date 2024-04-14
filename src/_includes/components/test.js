const {html} = require('common-tags');

function Test({sampleText, otherText}) {
  return html`
  <div class="flex flex-row text-left justify-center w-screen">
    <h1 class="text-primary text-3xl">${sampleText}</h1>
    <p class="text-secondary text-2xl">${otherText}</p>
  </div>
  `;
}

module.exports = Test;