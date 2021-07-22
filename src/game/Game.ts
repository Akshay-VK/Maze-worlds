import { Color } from "../images/Color";
import { SpriteSheet } from "../images/Spritesheet";
import { dim2 } from "../math/Dim2";
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

    private spriteSheet: SpriteSheet;

    private webglUtil: WebglUtil;

    private x: number;
    private frameNumber: number;
    private temptex: HTMLImageElement;
    private frameCount;


    
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

        
        this.temptex = document.getElementById('imagee') as HTMLImageElement;

        this.spriteSheet = new SpriteSheet(this.temptex, new float2(25,25),{
            "l1":new float2(0,0),
            "l2":new float2(1,0),
            "l3":new float2(2,0),
            "l4":new float2(3,0)
        })

        this.webglUtil = new WebglUtil();


        //debug
        console.log(this,this.render);
        this.x=0;
        this.frameNumber = 1;
        this.frameCount=0;
    }
    public update(): void{
        this.x=(this.x+1)%600;

        this.frameCount = (this.frameCount+1)%60;

        //changes
        if(this.frameCount==0){
            this.frameNumber = ((this.frameNumber+1)%4);
        }
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
        //this.imageRender.drawImage(this.temptex, this.x, 100, 100,50);
        //this.imageRender.drawImage(this.temptex, this.x, 200, 25,25,1, 1, 25, 25);
        var loc: dim2 = this.spriteSheet.getImage("l"+this.frameNumber);
        
        this.imageRender.drawImage(this.temptex,20,200,50,50,loc.x,loc.y,loc.width,loc.height);
    }
}