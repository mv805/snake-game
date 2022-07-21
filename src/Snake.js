export class Snake {

    #body = [
        { x: 9, y: 9 },
        { x: 9, y: 10 },
        { x: 9, y: 11 },
        { x: 9, y: 12 }
    ];

    #directionOffset = {
        up: { col: 0, row: -1 },
        down: { col: 0, row: 1 },
        left: { col: -1, row: 0 },
        right: { col: 1, row: 0 }
    };

    #drivingDirection;
    #xHead = this.#body[0].x;
    #yHead = this.#body[0].y;

    #addLeadCell() {

        this.#body.unshift({
            x: this.#xHead + this.#directionOffset[`${ this.#drivingDirection }`].col,
            y: this.#yHead + this.#directionOffset[`${ this.#drivingDirection }`].row
        });

        //update the latest head position
        this.#xHead = this.#body[0].x;
        this.#yHead = this.#body[0].y;

    }

    #removeLastCell() {

        this.#body.pop();

    }

    move() {
        //add one cell forward and remove trailing cell
        this.#addLeadCell();
        this.#removeLastCell();
    }

    #checkOppositeDirection(direction) {

        let opposites = {
            'up': 'down',
            'down': 'up',
            'left': 'right',
            'right': 'left'
        };

        if (opposites[`${ direction }`] === this.#drivingDirection) {
            return true;
        } else {
            return false;
        };

    }

    hitWall() {

        if (this.#xHead === 0 ||
            this.#xHead === 19 ||
            this.#yHead === 0 ||
            this.#yHead === 19) {
            return true;
        } else {
            return false;
        };

    }

    get bodyCellElement() {

        let element = document.createElement('div');
        element.classList.add('snake-cell');
        return element;

    }

    get nextPos() {

        return {
            x: this.#xHead + this.#directionOffset[`${ this.#drivingDirection }`].col,
            y: this.#yHead + this.#directionOffset[`${ this.#drivingDirection }`].row
        };

    }

    set drivingDirection(newDirection) {

        if (newDirection === this.#drivingDirection ||
            this.#checkOppositeDirection(newDirection)) {
            return;
        }

        this.#drivingDirection = newDirection;
    }

    get body() {

        return this.#body;

    }
}