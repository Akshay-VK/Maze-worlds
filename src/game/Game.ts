import { Color } from "../images/Color";
import { float2 } from "../math/float2";

export class Game{
    private backgroundContext: CanvasRenderingContext2D;
    private characterContext: CanvasRenderingContext2D;
    private lightsContext: CanvasRenderingContext2D;

    clearColor: Color;

    dimensions: float2;

    constructor(bgctx: CanvasRenderingContext2D,charctx: CanvasRenderingContext2D,lightctx: CanvasRenderingContext2D){
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
    }

    public loop(): void{
        
        this.update();
        this.render(this.backgroundContext,this.characterContext,this.lightsContext);

        requestAnimationFrame(this.loop);
    }

    private update(): void{

    }
    private render(bgctx: CanvasRenderingContext2D,charctx: CanvasRenderingContext2D, lctx: CanvasRenderingContext2D): void{
        //TODO: Do clearing ONlY if required.
        bgctx.fillStyle=`rgba(${this.clearColor.r},${this.clearColor.g},${this.clearColor.b},${this.clearColor.a})`;
        bgctx.fillRect(0,0,this.dimensions.x,this.dimensions.y);

        charctx.fillStyle=`rgba(${this.clearColor.r},${this.clearColor.g},${this.clearColor.b},${this.clearColor.a})`;
        charctx.fillRect(0,0,this.dimensions.x,this.dimensions.y);

        lctx.fillStyle=`rgba(${this.clearColor.r},${this.clearColor.g},${this.clearColor.b},${this.clearColor.a})`;
        lctx.fillRect(0,0,this.dimensions.x,this.dimensions.y);

        

    }
}