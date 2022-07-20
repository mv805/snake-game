export class Screen {

    constructor() {
        this.width = 20;
        this.height = 20;
        this.grid = this.#generateGrid();
    }

    #generateGrid() {

        const grid = document.createElement('div');
        grid.classList.add('grid');

        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.setAttribute('data-row', row);
                cell.setAttribute('data-col', col);
                grid.appendChild(cell);
            }
        }
        return grid;
    }

    render(snake) {

        let cellToRender;

        snake.body.forEach(cell => {
            cellToRender = document.body.querySelector(`[data-row="${ cell.x }"][data-col="${ cell.y }"]`);
            if (!cellToRender.hasChildNodes()) {
                cellToRender.appendChild(snake.bodyCellElement);
            } else {
                return;
            }
        });

    }

}