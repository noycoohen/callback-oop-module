class Test {
    data;
    constructor(data) {
        this.data = data;
    }
    run() {
        console.log(this);
    }
}

let test1 = new Test(5);
test1.run();

document.querySelector('button')
    .addEventListener('click', test1.run);

document.querySelector('button')
    .addEventListener('click', () => {
        test1.run()
    });
