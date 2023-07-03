const inputData = document.querySelector(`#validation-input`);

const dataLength = inputData.getAttribute(`data-length`);

inputData.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    const currentValue = event.currentTarget.value.length;
    if (currentValue === Number(dataLength)) {
        inputData.classList.remove(`invalid`);
        inputData.classList.add(`valid`);
    }

    else {inputData.classList.add(`invalid`);
    }
}
    