import { float2 } from "../math/float2";

export class Light{
    private position: float2;
    private intens: number;
    constructor(x: number, y: number, intensity: number){
        this.position = new float2(x,y);
        this.intens = intensity;
    }
    public get getAsVec3(): Object{
        return {
            x:this.position.x,
            y:this.position.y,
            z:this.intens
        };
    }
    public setPosition(x: number,y: number){
	this.position.x =x;
	this.position.y=y;
    }
    public get pos(): float2{
        return this.position;
    }
    public get intensity(): number{
        return this.intens;
    }
    public setIntensity(a: number): void{
        this.intens = a;
    }
}
