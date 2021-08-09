import { float2 } from "../../../math/float2";
import { dim2 } from "../../../math/Dim2";
import { Directions } from "../../../util/directions";
import { ImageRenderer } from "../../../renderer/imageRenderer";
import { InputHandler } from "../../../util/inputHandler";
import { Sprite } from "../Sprite";

export class Player extends Sprite{
   
    public dim: dim2;
    private velocity: float2;
    private direction: Directions;
	
    private img: HTMLImageElement;
	
		
    private inp: InputHandler;
	
    private renderPos: float2;

    public constructor(ren: ImageRenderer, pos: float2, size: float2, unitSize: float2){
        super(ren, pos,size, unitSize, 8, {
            "l1":new float2(0,0),
            "l2":new float2(1,0),
            "l3":new float2(2,0),
            "l4":new float2(3,0),
            "l5":new float2(4,0),
            "l6":new float2(5,0),
            "l7":new float2(0,1),
            "l8":new float2(1,1),
            "r1":new float2(2,1),
            "r2":new float2(3,1),
            "r3":new float2(4,1),
            "r4":new float2(5,1),
            "r5":new float2(0,2),
            "r6":new float2(1,2),
            "r7":new float2(2,2),
            "r8":new float2(3,2)
        });
        
        this.dim = new dim2(pos.x,pos.y,size.x,size.y);

        this.velocity = new float2(2,2);
        this.direction = Directions.East;
		

        this.img = <HTMLImageElement>document.getElementById('imagee');
    
        this.renderPos = new float2(0,0);
        this.renderPos = float2.add(this.renderPos,new float2(600,400));
        this.renderPos = float2.divide(this.renderPos,this.dim.size);
        this.renderPos = float2.divide(this.renderPos,new float2(2,2));
        this.renderPos = new float2(Math.round(this.renderPos.x),Math.round(this.renderPos.y));
        this.renderPos = float2.multiply(this.renderPos,this.dim.size);
        
        
        
        
        this.totalFrames = 8;

        this.imgFrameNumber=1;
        this.inp = new InputHandler();

        console.log(this);
    }
	
	public update(){
	    this.frame=(this.frame+1)%60;
        		
 	    if(this.frame%5 == 0){
	        this.imgFrameNumber = (this.imgFrameNumber+1)%(this.totalFrames+1);
	    }
            if(this.imgFrameNumber == 0){this.imgFrameNumber=1;}
		
	    this.handleKeys(this.inp.keys);
	}

    private handleKeys(keys: Object): void{
    if(this.frame%5==0){
            if(keys["w"] ==true){
                    this.direction = Directions.East;
                    this.dim.y-=this.velocity.y;
            }else if(keys["a"]==true){
                    this.direction = Directions.West;
                    this.dim.x-=this.velocity.x;
            }else if(keys["s"]==true){
                    this.direction = Directions.West;
                    this.dim.y+=this.velocity.y;
            }else if(keys["d"]==true){
                    this.direction = Directions.East;
                this.dim.x+=this.velocity.x;
            }
        }
    }

	public render(){

            if(this.direction == Directions.East){
                var loc: dim2 = this.spritesheet.getImage("r"+this.imgFrameNumber);
        
                this.renderer.drawImage(this.img,this.renderPos.x,this.renderPos.y,this.dim.width,this.dim.height,loc.x,loc.y,loc.width,loc.height);
            }else{

	        var loc: dim2 = this.spritesheet.getImage("l"+this.imgFrameNumber);
        
                this.renderer.drawImage(this.img,this.renderPos.x,this.renderPos.y,this.dim.width,this.dim.height,loc.x,loc.y,loc.width,loc.height);
            }
	}
}
