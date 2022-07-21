export class ControlListener {

    constructor(snake) {
        this.#snake = snake;
        this.#snakeDirectionListener();
        this.#controlBoard = this.#createControlBoard();
    }

    #snake;
    #controlBoard;
    #controls = {
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        'ArrowUp': 'up',
        'ArrowDown': 'down'
    };

    #createControlBoard(){
        let board = document.createElement('div');
        board.classList.add('control-board');

        let buttonUp = document.createElement('button');
        buttonUp.classList.add('control-button', 'button-up');
        let buttonLeft = document.createElement('button');
        buttonLeft.classList.add('control-button', 'button-left');
        let buttonRight = document.createElement('button');
        buttonRight.classList.add('control-button', 'button-right');
        let buttonDown = document.createElement('button');
        buttonDown.classList.add('control-button', 'button-down');

        buttonUp.addEventListener('click', () => {
            this.#changeDirection('up');
            console.log(this.#snake.drivingDirection);
        });
        buttonDown.addEventListener('click', () => this.#changeDirection('down'));
        buttonLeft.addEventListener('click', () => this.#changeDirection('left'));
        buttonRight.addEventListener('click', () => this.#changeDirection('right'));

        board.appendChild(buttonUp);
        board.appendChild(buttonLeft);
        board.appendChild(buttonRight);
        board.appendChild(buttonDown);

        return board;
    }

    #changeDirection(direction){
        this.#snake.drivingDirection = direction;
    }

    #snakeDirectionListener(direction) {

        document.addEventListener('keydown', event => {
            if (event.key in this.#controls) {
                this.#snake.drivingDirection = this.#controls[`${ event.key }`];
            }
        });

    }

    get controlBoard(){
        return this.#controlBoard;
    }

}