import {
    draw as drawSnake, update as updateSnake, SNAKE_SPEED, getSnakeHead,
    snakeIntersection
} from './snake.js';
import { draw as drawFood, update as updateFood } from './food.js';
import { outsideGrid } from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game_board');

const main = (currentTime) => {

    if (gameOver) {
        if (confirm('You lost! Press ok to restart')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    console.log('render');
    lastRenderTime = currentTime;

    update();
    draw();
    checkDeath();

};

window.requestAnimationFrame(main);

const update = () => {
    updateSnake();
    updateFood();
};

const draw = () => {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
};


function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}