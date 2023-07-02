const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

input.addEventListener(`input`, onInputName);

function onInputName(event) {
    span.textContent = event.currentTarget.value;
    if (span.textContent === ``) {
        span.textContent = `Anonymous`;
    }
}