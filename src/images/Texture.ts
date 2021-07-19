import { float2 } from "../math/float2";
import { Color } from "./Color";

export class Texture{
    private pixels: Color[][];
    private elm: HTMLImageElement;
    public size: float2;

    public constructor(imgSourceId: string){
        this.elm = document.getElementById(imgSourceId) as HTMLImageElement;

        this.size=new float2(this.elm.width,this.elm.height);

        var canvas = document.getElementById('image-reader') as HTMLCanvasElement;
        var ctx = canvas.getContext('2d');
        
        ctx.drawImage(this.elm,0,0,this.size.x,this.size.y);

        this.pixels = new Array<Array<Color>>(this.size.x);
        for(var x=0;x<this.size.x;x++){
            this.pixels[x] = new Array<Color>(this.size.y);
            for(var y=0;y<this.size.y;y++){
                var color = ctx.getImageData(x,y,1,1).data;
                this.pixels[x][y] = new Color(color[0],color[1],color[2],color[3]*255);
            }
        }
    }

    public getColor(x: number,y: number) {
        if(!this.getIfOutOfBounds(x,y)){
            return this.pixels[x][y];
        }
    }
    private getIfOutOfBounds(x: number,y: number): boolean{
        var res = x<0 || x > this.size.x-1 || y<0 || y > this.size.y-1;
        if(res){
            throw new Error('image pixel query out of bounds');
        }else{
            return false;
        }
    }
}