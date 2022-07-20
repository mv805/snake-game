export class Snake {

    constructor(xStart, yStart) {
        this.body = [
            {
                x: xStart,
                y: yStart
            }
        ];
        this.xHead = xStart;
        this.yHead = yStart;
    }

    get headPos() {
        return {
            x: this.xHead,
            y: this.yHead
        };
    }

    get bodyCellElement() {
        let element = document.createElement('div');
        element.classList.add('snake-cell');
        return element
    }
}