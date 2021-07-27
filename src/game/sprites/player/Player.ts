import { float2 } from "../../../math/float2";
import { Spritesheet } from "../../../images/Spritesheet";

export class Player{
    
    private gl: WebGLRenderingContext;

    public constructor(gl: WebGLRenderingContext, pos: float2, size: float2, spritesheet: Spritesheet){
        this.gl = gl;
    }
}