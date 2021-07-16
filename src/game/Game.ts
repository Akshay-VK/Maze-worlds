import { Color } from "../images/Color";
import { float2 } from "../math/float2";
import { ColorRenderer } from "../renderer/colorRenderer";

export class Game{
    private backgroundContext: WebGLRenderingContext;
    private characterContext: WebGLRenderingContext;
    private lightsContext: WebGLRenderingContext;

    private clearColor: Color;

    private dimensions: float2;

    private colorRenderer: ColorRenderer;

    constructor(bgctx: WebGLRenderingContext,charctx: WebGLRenderingContext,lightctx: WebGLRenderingContext){
        if(!(bgctx.canvas.width==charctx.canvas.width && bgctx.canvas.height==charctx.canvas.height)){
            throw new Error('Canvas size of contexts provided are not same.');
        }else{
            if(!(bgctx.canvas.width==lightctx.canvas.width && bgctx.canvas.height==lightctx.canvas.height)){
                throw new Error('Canvas size of contexts provided are not same.');
            }
        }
        
        this.backgroundContext=bgctx;
        this.characterContext=charctx;
        this.lightsContext=lightctx;

        this.clearColor = new Color(0,0,0,1);

        this.dimensions = new float2(bgctx.canvas.width,bgctx.canvas.height);

        this.colorRenderer = new ColorRenderer(this.lightsContext,"vs-color","fs-color");

    }

    public loop(): void{
        
        this.update();
        this.render(this.backgroundContext,this.characterContext,this.lightsContext);

        requestAnimationFrame(this.loop);
    }

    public update(): void{
        var a =1;
        a++;
    }
    public render(bgctx: WebGLRenderingContext,charctx: WebGLRenderingContext, lctx: WebGLRenderingContext): void{
        //TODO: Do clearing ONlY if required.
        var normBgCol: Color = this.clearColor.normalized;
        bgctx.clearColor(normBgCol.r,normBgCol.g,normBgCol.b,normBgCol.a);
        bgctx.clear(bgctx.COLOR_BUFFER_BIT);

    }
}