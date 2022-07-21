import './style.css';
import { Screen } from './Screen';
import { Snake } from './Snake';
import { ControlListener } from './ControlListener';
import { Food } from './Food';

let screen = new Screen();
let snake = new Snake();
let renderElements = [snake, new Food()];
let controlListener = new ControlListener(snake);

const TIME_REDUCE_STEP = 0.25;
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
screen.render(renderElements);
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
            clearInterval(gameUpdateInterval);
            console.log('hit self');
            break;
        case 'FOOD':
            console.log('ate food');
            renderElements[1] = new Food();
            gameSpeed -= TIME_REDUCE_STEP;
            clearInterval(gameUpdateInterval);
            gameUpdateInterval = setInterval(update, gameSpeed);
            snake.grow();
            break;
        case 'CLEAR':
            snake.move();
            break;

        default:
            break;
    }

    screen.render(renderElements);

}

function checkCollision(snake) {

    let nextCell = document.body.querySelector(`[data-row="${ snake.nextPos.y }"][data-col="${ snake.nextPos.x }"]`);

    if (!nextCell && snake.hitWall()) {
        return 'WALL';
    } else if (nextCell.children[0] === undefined) {
        return 'CLEAR';
    } else if (nextCell.children[0].className === 'snake-cell') {
        return 'SELF';
    } else if (nextCell.children[0].className === 'food-cell') {
        return 'FOOD';
    }
}

