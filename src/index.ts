import { Game } from "./game/Game";

var backgroundCanvas: HTMLCanvasElement = document.querySelector('#bg-canvas');
var bgctx : WebGLRenderingContext = backgroundCanvas.getContext('webgl');

var characterCanvas: HTMLCanvasElement = document.querySelector('#char-canvas');
var charctx : WebGLRenderingContext = characterCanvas.getContext('webgl');

var lightsCanvas : HTMLCanvasElement = document.querySelector('#lights-canvas');
var lightctx : WebGLRenderingContext = lightsCanvas.getContext('webgl');

var game = new Game(bgctx,charctx,lightctx);

function loop(){
    game.update();
    game.render();

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);