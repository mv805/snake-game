export class Screen {

    #width = 20;
    #height = 20;
    #grid;

    constructor() {
        this.#grid = this.#generateGrid();
    }

    #generateGrid() {

        const grid = document.createElement('div');
        grid.classList.add('grid');

        for (let row = 0; row < this.#height; row++) {
            for (let col = 0; col < this.#width; col++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-row', row);
                cell.setAttribute('data-col', col);
                grid.appendChild(cell);
            }
        }
        return grid;
    }

    get screenElement() {
        return this.#grid;
    }

    #clearGrid() {
        const gridCells = document.body.querySelectorAll('.cell');
        for (let cell of gridCells) {
            if (cell.hasChildNodes()) {
                cell.textContent = '';
            }
        }
    }

    renderSnake(snake) {

        this.#clearGrid();
        let cellToRender;
        for (const cell of snake.body) {
            cellToRender = document.body.querySelector(`[data-row="${ cell.y }"][data-col="${ cell.x }"]`);
            cellToRender.appendChild(snake.bodyCellElement);
        }

    };
}

