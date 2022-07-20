export class Snake {

    constructor() {

    }

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

        this.#xHead = this.#body[0].x;
        this.#yHead = this.#body[0].y;
    }

    #removeLastCell() {
        this.#body.pop();
    }

    move() {
        this.#addLeadCell();
        this.#removeLastCell();
    }

    #oppositeDrivingDirection(direction){

        let opposites = {
            'up': 'down',
            'down': 'up',
            'left': 'right',
            'right': 'left'
        }

        if(opposites[`${direction}`] === this.#drivingDirection){
            return true;
        } else {
            return false;
        }
    }

    get bodyCellElement() {
        let element = document.createElement('div');
        element.classList.add('snake-cell');
        return element;
    }

    set drivingDirection(newDirection){
    
        let direction = newDirection.toLowerCase().replace('arrow', '');
        if(direction === this.#drivingDirection ||
            this.#oppositeDrivingDirection(direction)){
            return;
        }

        this.#drivingDirection = direction;
        
    }

    get body() {
        return this.#body;
    }
}