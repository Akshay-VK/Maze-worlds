import { float2 } from "../../math/float2";
import { dim2 } from "../../math/Dim2";
import { Directions } from "../../util/directions";
import { SpriteSheet } from "../../images/Spritesheet";
import { ImageRenderer } from "../../renderer/imageRenderer";


export class Sprite{
    protected renderer: ImageRenderer;
    protected spritesheet : SpriteSheet;
    
    public dim: dim2;
    
    protected image: HTMLImageElement;
    
    protected frame: number;
    protected totalFrames: number;
    protected imgFrameNumber: number;
        
    constructor(ren: ImageRenderer, pos: float2, size: float2, unitSize: float2, totalFrames: number, spritesheetKeys: Object){
        this.renderer = ren;
        this.dim = new dim2(pos.x, pos.y, size.x, size.y);
        
        this.image = document.getElementById('imagee') as HTMLImageElement;
        
        this.spritesheet = new SpriteSheet(this.image, unitSize, spritesheetKeys);
        
        
        this.totalFrames = 8;
		
        this.imgFrameNumber=1;
        this.frame = 0;
    }
    public update(){
        this.frame=(this.frame+1)%60;
        console.log(this.frame,this.imgFrameNumber);
        		
 	    if(this.frame%5 == 0){
	        this.imgFrameNumber = (this.imgFrameNumber+1)%(this.totalFrames+1);
	    }
        if(this.imgFrameNumber == 0){this.imgFrameNumber=1;}
    }
    public render(playerPos: float2){
        
    }
}