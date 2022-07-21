export class Screen {

    constructor() {
        this.#grid = this.#generateGrid();
    }

    #width = 20;
    #height = 20;
    #grid;

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


    #clearGrid() {
        const gridCells = document.body.querySelectorAll('.cell');
        for (let cell of gridCells) {
            cell.textContent = '';
        }
    }

    render(gameElements) {

        this.#clearGrid();

        let cellToRender;
        gameElements.forEach(element => {
            
            if (element.constructor.name === 'Snake') {
                for (const cell of element.body) {
                    cellToRender = document.body.querySelector(`[data-row="${ cell.y }"][data-col="${ cell.x }"]`);
                    cellToRender.appendChild(element.bodyCellElement);
                }
            } else if (element.constructor.name === 'Food') {
                cellToRender = document.body.querySelector(`[data-row="${ element.pos.y }"][data-col="${ element.pos.x }"]`);
                cellToRender.appendChild(element.foodCellElement);
                return;
            }
        });


    }

    get screenElement() {
        return this.#grid;
    }
}

