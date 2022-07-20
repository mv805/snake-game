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
            for (let col = 0; col < this.width; col++){
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.id= `data-row="${row}" data-col="${col}"`;
                grid.appendChild(cell);
            }
        }
        return grid;
    }

}