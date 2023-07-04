const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);


inputEl.addEventListener(`input`, onInputChangeSpan);


function onInputChangeSpan() {
    const currentFontSize = inputEl.value;
    spanEl.style.fontSize = currentFontSize + `px`;
}
