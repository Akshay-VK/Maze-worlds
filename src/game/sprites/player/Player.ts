import { float2 } from "../../../math/float2";
import { SpriteSheet } from "../../../images/Spritesheet";

export class Player{
    
    private gl: WebGLRenderingContext;

    public constructor(gl: WebGLRenderingContext, pos: float2, size: float2, spritesheet: SpriteSheet){
        this.gl = gl;
    }
}