const counterValue = document.querySelector(`#value`);
let counter = 0;

const decrementBtn = document.querySelector(`[data-action="decrement"]`)

const incrementBtn = document.querySelector(`[data-action="increment"]`)


incrementBtn.addEventListener(`click`, (handleClickUp) => {
    counter += 1;
    counterValue.textContent = counter;
    console.log(counterValue.textContent);
})


decrementBtn.addEventListener(`click`, (handleClickDown) => {
    counter -= 1;
    counterValue.textContent = counter;
    console.log(counterValue.textContent);
})


