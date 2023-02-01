class Stopper {
    seconds = 0;
    running = false;
    output;

    constructor(rootId) {
        const root = document.querySelector('#' + rootId);
        this.output = root.querySelector('.output');

        root.querySelector('.start').addEventListener('click', () => {
            if (this.running) { return; }
            this.running = true;
            this.updateOutput();
        });
        root.querySelector('.end').addEventListener('click', () => {
            this.running = false;
        });
        root.querySelector('.reset').addEventListener('click', () => {
            this.seconds = 0;
            this.output.innerText = 0;
        });
    }

    updateOutput() {
        if (!this.running) { return; }
        this.seconds += 1;
        this.output.innerText = this.seconds;
        setTimeout(() => {
            this.updateOutput();
        }, 1000);
    }
}

new Stopper('stopper1');
new Stopper('stopper2');
