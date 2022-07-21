import './style.css';
import { Screen } from './Screen';
import { Snake } from './Snake';
import { ControlListener } from './ControlListener';
import { Food } from './Food';

let screen = new Screen();
let snake = new Snake();
let renderElements = [snake, new Food()];
let controlListener = new ControlListener(snake);

let score = 0;
const TIME_REDUCE_STEP = 0.25;
let gameSpeed = 100;
let gameUpdateInterval;

let headerElement = header();
let scoreBoardElement = scoreBoard();
let gameOverSplashElement = gameOverSplash(score);

const controls = {
    'ArrowLeft': 'left',
    'ArrowRight': 'right',
    'ArrowUp': 'up',
    'ArrowDown': 'down'
};

//initial setup
document.body.appendChild(headerElement);
document.body.appendChild(screen.screenElement);
document.body.appendChild(scoreBoardElement);

screen.render(renderElements);
document.addEventListener('keydown', start);

function scoreBoard() {
    let scoreBoard = document.createElement('div');
    scoreBoard.textContent = `Score: ${ score }`;
    scoreBoard.classList.add('score');

    return scoreBoard;
}

function header() {
    let header = document.createElement('h1');
    header.textContent = 'Snake!';
    header.classList.add('header');

    return header;
}

function gameOverSplash(score) {

    let gameOverSplashBackground = document.createElement('div');
    gameOverSplashBackground.classList.add('game-over-bg');
    let gameOverSplash = document.createElement('div');
    gameOverSplash.classList.add('game-over-splash');


    let gameOverHeader = document.createElement('h1');
    gameOverHeader.textContent = 'Game Over!';
    let gameOverScore = document.createElement('p');
    gameOverScore.textContent = `Score: ${ score }`;
    let restartButton = document.createElement('button');
    restartButton.classList.add('restart');
    restartButton.textContent = 'Restart';
    restartButton.addEventListener('click', restartGame);

    gameOverSplash.appendChild(gameOverHeader);
    gameOverSplash.appendChild(gameOverScore);
    gameOverSplash.appendChild(restartButton);
    gameOverSplashBackground.appendChild(gameOverSplash);

    return gameOverSplashBackground;

}

function start(e) {

    if (controls[`${ e.key }`]) {
        console.log('started');
        gameUpdateInterval = setInterval(update, gameSpeed);
        document.removeEventListener('keydown', start);
    }

}

function restartGame() {

    document.body.removeChild(gameOverSplashElement);
    document.body.removeChild(screen.screenElement);
    document.body.removeChild(scoreBoardElement);

    screen = new Screen();
    snake = new Snake();
    renderElements = [snake, new Food()];
    controlListener = new ControlListener(snake);

    score = 0;

    document.body.appendChild(screen.screenElement);
    document.body.appendChild(scoreBoardElement);
    screen.render(renderElements);

    document.addEventListener('keydown', start);
}

function update() {

    switch (checkCollision(snake)) {
        case 'WALL':
            clearInterval(gameUpdateInterval);
            console.log('hit wall');
            gameOverSplashElement = gameOverSplash(score);
            document.body.appendChild(gameOverSplashElement);
            break;
        case 'SELF':
            clearInterval(gameUpdateInterval);
            console.log('hit self');
            gameOverSplashElement = gameOverSplash(score);
            document.body.appendChild(gameOverSplashElement);
            break;
        case 'FOOD':
            console.log('ate food');
            renderElements[1] = new Food();
            gameSpeed -= TIME_REDUCE_STEP;
            scoreBoardElement.textContent = `Score: ${ ++score }`;
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

