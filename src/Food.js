export class Food {

    constructor() {
        this.#setPosition();
    }

    #xPos;
    #yPos;

    #setPosition() {

        let x;
        let y;
        let cellToCheckForElement;

        do {
            x = this.#getRandomInt(0, 20);
            y = this.#getRandomInt(0, 20);

            cellToCheckForElement = document.body.querySelector(`[data-row="${ y }"][data-col="${ x }"]`);
        } while (cellToCheckForElement && cellToCheckForElement.hasChildNodes());
        
        this.#xPos = x;
        this.#yPos = y;
    }

    #getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
        //The maximum is exclusive and the minimum is inclusive
    }

    get pos() {

        return {
            x: this.#xPos,
            y: this.#yPos
        };

    }

    get foodCellElement() {

        let element = document.createElement('div');
        element.classList.add('food-cell');
        return element;

    }
}