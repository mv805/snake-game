import './style.css';
import { Screen } from './Screen';
import { Snake } from './Snake';
import { ControlListener } from './ControlListener';

let screen = new Screen();
let snake = new Snake();
let controlListener = new ControlListener(snake);

let gameSpeed = 100;
let gameUpdateInterval;

const controls = {
    'ArrowLeft': 'left',
    'ArrowRight': 'right',
    'ArrowUp': 'up',
    'ArrowDown': 'down'
};

//initial setup
document.body.appendChild(screen.screenElement);
screen.renderSnake(snake);
document.addEventListener('keydown', start);

function start(e) {

    if (controls[`${ e.key }`]) {
        console.log('started');
        gameUpdateInterval = setInterval(update, gameSpeed);
        document.removeEventListener('keydown', start);
    }

}

function update() {

    switch (checkCollision(snake)) {
        case 'WALL':
            clearInterval(gameUpdateInterval);
            console.log('hit wall');
            break;
        case 'SELF':

            break;
        case 'FOOD':

            break;
        case 'CLEAR':
            console.log('moving to clear...');
            snake.move();
            break;

        default:
            break;
    }

    screen.renderSnake(snake);

}

function checkCollision(snake) {

    let nextCell = document.body.querySelector(`[data-row="${ snake.nextPos.y }"][data-col="${ snake.nextPos.x }"]`);

    if (!nextCell && snake.hitWall()) {
        return 'WALL';
    }

    switch (nextCell.children[0]) {
        case undefined:
            console.log('its clear');
            return 'CLEAR';

        default:
            break;
    }
}

