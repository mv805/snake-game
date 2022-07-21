export class ControlListener {

    constructor(snake) {
        this.#snake = snake;
        this.#snakeDirectionController();
    }

    #snake;

    #controls = {
        'ArrowLeft': 'left',
        'ArrowRight': 'right',
        'ArrowUp': 'up',
        'ArrowDown': 'down'
    };

    #snakeDirectionController() {

        document.addEventListener('keydown', event => {
            if (event.key in this.#controls) {
                this.#snake.drivingDirection = this.#controls[`${ event.key }`];
            }
        });

    }

}