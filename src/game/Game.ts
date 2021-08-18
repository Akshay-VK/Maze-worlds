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
import { LightRenderer } from "../renderer/lightRenderer";
import { Light } from "../lights/Light";

export class Game {
    private backgroundContext: WebGLRenderingContext;
    private characterContext: WebGLRenderingContext;
    private lightsContext: WebGLRenderingContext;

    private clearColor: Color;

    private dimensions: float2;

    private colorRenderer: ColorRenderer;
    private imageRender: ImageRenderer;
    private lightRenderer: LightRenderer;

    private handler: Handler;

    private frameNumber: number;

    private player: Player;

    constructor(bgctx: WebGLRenderingContext, charctx: WebGLRenderingContext, lightctx: WebGLRenderingContext) {
        if (!(bgctx.canvas.width == charctx.canvas.width && bgctx.canvas.height == charctx.canvas.height)) {
            throw new Error('Canvas size of contexts provided are not same.');
        } else {
            if (!(bgctx.canvas.width == lightctx.canvas.width && bgctx.canvas.height == lightctx.canvas.height)) {
                throw new Error('Canvas size of contexts provided are not same.');
            }
        }

        //setting contexts
        this.backgroundContext = bgctx;
        this.characterContext = charctx;
        this.lightsContext = lightctx;

        this.clearColor = new Color(0, 255, 0, 255);

        this.dimensions = new float2(bgctx.canvas.width, bgctx.canvas.height);

        //initializing individual renderers
        this.colorRenderer = new ColorRenderer(this.backgroundContext, "vs-color", "fs-color");
        this.imageRender = new ImageRenderer(this.characterContext, "vs-image", "fs-image");
        this.lightRenderer = new LightRenderer(this.lightsContext, "vs-lights", "fs-lights", float2.from(25.0));

        this.player = new Player(this.imageRender, new float2(10, 50), new float2(25, 25), new float2(25, 25));

        this.handler = new Handler(this.player, this.dimensions);
        this.handler.addSprite(new DebugSprite(this.imageRender, new float2(10, 50), new float2(25, 25), new float2(25, 25), document.getElementById('imagee') as HTMLImageElement))

        this.lightRenderer.addLight(new Light(100, 200, 15));
        this.lightRenderer.addLight(new Light(300, 200, 20));

        //debug
        this.frameNumber = 0;
    }
    public update(): void {
        this.frameNumber += 1;
        this.frameNumber %= 60;

        this.handler.update();
        this.lightRenderer.lights[0].setPosition(this.lightRenderer.lights[0].pos.x + 0.5, 200);
    }
    public render(bgctx: WebGLRenderingContext = this.backgroundContext, charctx: WebGLRenderingContext = this.characterContext, lctx: WebGLRenderingContext = this.lightsContext): void {
        //TODO: Do clearing ONlY if required.

        //this.colorRenderer.clear(this.clearColor);
        this.handler.render();
        this.lightRenderer.render();
    }
}
