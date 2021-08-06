import { float2 } from "../../math/float2";
import { ImageRenderer } from "../../renderer/imageRenderer";
import { Sprite } from "./Sprite";

export class DebugSprite extends Sprite{
    private img;
    public constructor(ren: ImageRenderer, pos: float2, size: float2, unitSize: float2, img: HTMLImageElement){
        super(ren, pos, size, unitSize, 1,{"d": new float2(1,1)});
        this.img = img;
    }
    public render(pos: float2){
        var d = super.dim.position;
        d = float2.subtract(d, pos);
        d = float2.add(d, new float2(300,200));
        var loc = super.spritesheet.getImage("d");
        super.renderer.drawImage(this.img, d.x,d.y, super.dim.width, super.dim.height, loc.x,loc.y, loc.width, loc.height);
    }
}