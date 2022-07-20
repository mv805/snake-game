import './style.css';
import {Screen} from './Screen';
import { Snake } from './Snake';

let screen = new Screen();
let snake = new Snake(9, 9);

document.body.appendChild(screen.grid);
screen.render(snake);