import { Game } from "./game/Game";

var backgroundCanvas: HTMLCanvasElement = document.querySelector('#bg-canvas');
var bgctx : WebGLRenderingContext = backgroundCanvas.getContext('webgl');

var characterCanvas: HTMLCanvasElement = document.querySelector('#char-canvas');
var charctx : WebGLRenderingContext = characterCanvas.getContext('webgl');

var lightsCanvas : HTMLCanvasElement = document.querySelector('#lights-canvas');
var lightctx : WebGLRenderingContext = lightsCanvas.getContext('webgl');

var game = new Game(bgctx,charctx,lightctx);

var debug = document.querySelector('#debug');

var fr = 0;

var times = [];
var fps;

function loop(){
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
    }
    times.push(now);
    fps = times.length;
    debug.innerHTML=`${fps}`;


    game.update();
    game.render();

    fr=(fr+1)%60;

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);