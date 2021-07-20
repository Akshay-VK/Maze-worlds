import { Color } from "../images/Color";
import { float2 } from "../math/float2";
import { ColorRenderer } from "../renderer/colorRenderer";
import { ImageRenderer } from "../renderer/imageRenderer";
import { WebglUtil } from "../util/webgl";

export class Game{
    private backgroundContext: WebGLRenderingContext;
    private characterContext: WebGLRenderingContext;
    private lightsContext: WebGLRenderingContext;

    private clearColor: Color;

    private dimensions: float2;

    private colorRenderer: ColorRenderer;
    private imageRender: ImageRenderer;

    private webglUtil: WebglUtil;

    private x: number;
    private temptex: HTMLImageElement;
    
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

        this.clearColor = new Color(255, 255, 255,255);

        this.dimensions = new float2(bgctx.canvas.width,bgctx.canvas.height);

        this.colorRenderer = new ColorRenderer(this.lightsContext,"vs-color","fs-color");
        this.imageRender = new ImageRenderer(this.lightsContext,"vs-image","fs-image");

        this.webglUtil = new WebglUtil();

        this.temptex = document.getElementById('imagee') as HTMLImageElement;

        //debug
        console.log(this,this.render);
        this.x=0;
    }
    public update(): void{
        this.x=(this.x+1)%600;
    }
    public render(bgctx: WebGLRenderingContext=this.backgroundContext,charctx: WebGLRenderingContext=this.characterContext, lctx: WebGLRenderingContext=this.lightsContext): void{
        //TODO: Do clearing ONlY if required.

        //var normBgCol: Color = this.clearColor.normalized;
        // bgctx.clearColor(normBgCol.r,normBgCol.g,normBgCol.b,normBgCol.a);
        // bgctx.clear(bgctx.COLOR_BUFFER_BIT);

        this.colorRenderer.clear(this.clearColor);
        this.colorRenderer.rect(this.x,30,100,50,new Color(255,0,0,255));


        //this.imageRender.clear(this.clearColor);
        this.imageRender.drawImage(this.temptex,this.x,0);
    }
}