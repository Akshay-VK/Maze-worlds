import { float2 } from "../../math/float2";
import { ImageRenderer } from "../../renderer/imageRenderer";
import { Sprite } from "./Sprite";

export class DebugSprite extends Sprite{
    private img: HTMLImageElement;
    public constructor(ren: ImageRenderer, pos: float2, size: float2, unitSize: float2, img: HTMLImageElement){
        super(ren, pos, size, unitSize, 1,{"d": new float2(1,1)});
        this.img = img;
    }
    public render(pos: float2){
        var d = this.dim.position;
        d = float2.subtract(d, pos);
        d = float2.add(d, new float2(300,200));
        var loc = this.spritesheet.getImage("d");
        this.renderer.drawImage(this.img, d.x,d.y, this.dim.width, this.dim.height, loc.x,loc.y, loc.width, loc.height);
    }
}