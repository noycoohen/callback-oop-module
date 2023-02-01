import { Renderer } from './Renderer.js';

export class FormReader {
    root;

    constructor(rootId) {
        this.root = document.querySelector('#' + rootId);
        //this.root = document.getElementById(rootId);

        this.root.querySelector('button')
            .addEventListener('click', () => {
                this.#onclick();
            });
    }

    #onclick() {
        const renderer = new Renderer(
            this.root.querySelector('.tagname').value,
            this.root.querySelector('.attributename').value,
            this.root.querySelector('.attributevalue').value,
            this.root.querySelector('.content').value
        );
        renderer.render(this.root);
    }
}
