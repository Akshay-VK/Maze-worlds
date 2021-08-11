import {
    Color
} from "../images/Color";
import {
    float2
} from "../math/float2";
import {
    ColorRenderer
} from "../renderer/colorRenderer";
import {
    ImageRenderer
} from "../renderer/imageRenderer";
import {
    WebglUtil
} from "../util/webgl";
import {
    Handler
} from "../util/Handler";
import {
    Player
} from "./sprites/player/Player";
import {
    DebugSprite
} from "./sprites/DebugSprite";

export class Game {
    private backgroundContext: WebGLRenderingContext;
    private characterContext: WebGLRenderingContext;
    private lightsContext: WebGLRenderingContext;

    private clearColor: Color;

    private dimensions: float2;

    private colorRenderer: ColorRenderer;
    private imageRender: ImageRenderer;

    private handler: Handler;

    private webglUtil: WebglUtil;

    private x: number;
    private frameNumber: number;
    private imgTex: HTMLImageElement;

    private player: Player;

    constructor(bgctx: WebGLRenderingContext, charctx: WebGLRenderingContext, lightctx: WebGLRenderingContext) {
        if (!(bgctx.canvas.width == charctx.canvas.width && bgctx.canvas.height == charctx.canvas.height)) {
            throw new Error('Canvas size of contexts provided are not same.');
        } else {
            if (!(bgctx.canvas.width == lightctx.canvas.width && bgctx.canvas.height == lightctx.canvas.height)) {
                throw new Error('Canvas size of contexts provided are not same.');
            }
        }

        this.backgroundContext = bgctx;
        this.characterContext = charctx;
        this.lightsContext = lightctx;

        this.clearColor = new Color(0, 255, 0, 255);

        this.dimensions = new float2(bgctx.canvas.width, bgctx.canvas.height);

        this.colorRenderer = new ColorRenderer(this.backgroundContext, "vs-color", "fs-color");
        this.imageRender = new ImageRenderer(this.characterContext, "vs-image", "fs-image");


        this.imgTex = document.getElementById('imagee') as HTMLImageElement;

        this.player = new Player(this.imageRender, new float2(10, 50), new float2(25, 25), new float2(25, 25));

        this.handler = new Handler(this.player, this.dimensions);
        this.handler.addSprite(new DebugSprite(this.imageRender, new float2(10, 50), new float2(25, 25), new float2(25, 25), this.imgTex))

        this.webglUtil = new WebglUtil();

        //debug
        this.x = 0;
        this.frameNumber = 1;
    }
    public update(): void {
        this.frameNumber += 1;
        this.frameNumber %= 60;

        this.handler.update();
    }
    public render(bgctx: WebGLRenderingContext = this.backgroundContext, charctx: WebGLRenderingContext = this.characterContext, lctx: WebGLRenderingContext = this.lightsContext): void {
        //TODO: Do clearing ONlY if required.

        this.colorRenderer.clear(this.clearColor);
        //this.colorRenderer.rect(this.x,30,100,50,new Color(255,0,0,255));

        this.handler.render();
    }
}