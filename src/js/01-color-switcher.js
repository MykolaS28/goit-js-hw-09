const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyElement = document.body;
let timerId = null;

startButton.addEventListener('click', () => {
    timerId = setInterval(() => bodyElement.style.backgroundColor = getRandomHexColor(), 1000);
    stopButton.disabled = false;
    startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
    clearInterval(timerId);
    stopButton.disabled = true;
    startButton.disabled = false;
});