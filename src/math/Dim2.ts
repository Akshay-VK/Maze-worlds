import { float2 } from "./float2";

export class dim2{
    private pos: float2;
    private sizze: float2;
    public constructor(x: number, y: number, width: number, height: number){
        this.pos = new float2(x,y);
        this.sizze = new float2(width,height);
    }

    public get x(): number{
        return this.pos.x;
    }
    public get y(): number{
        return this.pos.y;
    }
    public get width(): number{
        return this.sizze.x;
    }
    public get height(): number{
        return this.sizze.y;
    }
    public get position(): float2{
        return this.pos;
    }
    public get size(): float2{
        return this.sizze;
    }
}