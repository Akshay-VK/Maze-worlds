import { float2 } from "./float2";

export class dim2{
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public constructor(x: number, y: number, width: number, height: number){
        this.x=x;
        this.y=y;
	    this.width=width;
	    this.height=height;
    }
    public get position(): float2{
        return new float2(this.x,this.y);
    }
    public get size(): float2{
        return new float2(this.width,this.height);
    }
    public setPos(p: float2): void{
    	this.x = p.x;
	    this.y = p.y;
    }
    public setSize(p: float2): void{
    	this.width=p.x;
	    this.height=p.y;
    }
    public static collides(a: dim2, b: dim2): boolean{
        var res = false;
        //TODO: Complete dim2 collision detection
        if(a.x>b.x && a.x < b.x+b.width && a.y > b.y && a.y < b.y+b.height){
            res = true;
        }else if(a.x+a.width > b.x && a.x+a.width < b.x+b.width && a.y+a.height > b.y && a.y+a.height < b.y+b.height){
            res = true;
        }else{
            res = false;
        }
        return res;
    }
}
