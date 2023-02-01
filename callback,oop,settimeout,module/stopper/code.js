let seconds = 0;
let running = false;

const output = document.querySelector('#output');
const updateOutput = () => {
    if (!running) { return; }

    seconds += 1;
    //seconds = seconds + 1;

    output.innerText = seconds;
    setTimeout(updateOutput, 1000);
};

document.querySelector('#start').addEventListener('click', () => {
    if (running) { return; }
    running = true;
    updateOutput();
});

document.querySelector('#end').addEventListener('click', () => {
    running = false;
});

document.querySelector('#reset').addEventListener('click', () => {
    seconds = 0;
    output.innerText = 0;
});