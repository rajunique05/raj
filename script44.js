let count = 0;

const counterValue = document.getElementById('counter-value');
const btnDecrease = document.getElementById('btn-decrease');
const btnReset = document.getElementById('btn-reset');
const btnIncrease = document.getElementById('btn-increase');

btnIncrease.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

btnDecrease.addEventListener('click', () => {
    count--;
    counterValue.textContent = count;
});

btnReset.addEventListener('click', () => {
    count = 0;
    counterValue.textContent = count;
});