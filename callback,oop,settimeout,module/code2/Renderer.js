export class Renderer {
    tagName;
    attributeName;
    attributeValue;
    content;

    constructor(tagName, attributeName, attributeValue, content) {
        this.tagName = tagName;
        this.attributeName = attributeName;
        this.attributeValue = attributeValue;
        this.content = content;
    }

    render(parent) {
        parent.lastChild.remove();

        const newElement = document.createElement(this.tagName);
        newElement.setAttribute(this.attributeName, this.attributeValue);
        newElement.innerText = this.content;

        // const newText= document.createTextNode(this.content);
        // newElement.appendChild(newText);

        parent.appendChild(newElement);
    }
}
