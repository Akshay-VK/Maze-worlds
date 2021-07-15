import { Game } from "./game/Game";

var backgroundCanvas: HTMLCanvasElement = document.querySelector('#bg-canvas');
var bgctx : CanvasRenderingContext2D = backgroundCanvas.getContext('2d');

var characterCanvas: HTMLCanvasElement = document.querySelector('#char-canvas');
var charctx : CanvasRenderingContext2D = characterCanvas.getContext('2d');

var lightsCanvas : HTMLCanvasElement = document.querySelector('#lights-canvas');
var lightctx : CanvasRenderingContext2D = lightsCanvas.getContext('2d');

var game = new Game(bgctx,charctx,lightctx);

requestAnimationFrame(game.loop);