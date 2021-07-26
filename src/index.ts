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

function loop(){
    game.update();
    game.render();

    fr=(fr+1)%60;
    //debug.innerHTML=`${fr}`;

    requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

//window.addEventListener("keydown",function(event){
    //console.log(event);
//});