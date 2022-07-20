import './style.css';
import { Screen } from './Screen';
import { Snake } from './Snake';

let screen = new Screen();
let snake = new Snake();
let gameSpeed = 100;
let runGame;
let gameStarted = false;

document.body.appendChild(screen.screenElement);
screen.renderSnake(snake);

document.addEventListener('keydown', event => {

    if ((event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown') && 
        !gameStarted) {
        snake.drivingDirection = event.key;
        runGame = setInterval(update, gameSpeed);
        gameStarted = true;
    }

    if ((event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown') && 
        gameStarted) {
        snake.drivingDirection = event.key;
    }
});

function update() {
    snake.move();
    if (checkCollision(snake)) {
        clearInterval(runGame);
        return;
    }
    screen.renderSnake(snake);
}

function checkCollision(snake) {
    if (snake.body[0].x < 0 ||
        snake.body[0].x > 19 ||
        snake.body[0].y < 0 ||
        snake.body[0].y > 19) {
        return true;
    }
}

