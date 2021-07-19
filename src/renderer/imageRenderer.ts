import { Color } from "../images/Color";
import { Texture } from "../images/Texture";
import { dim2 } from "../math/Dim2";
import { ColorRenderer } from "./colorRenderer";

export class ImageRenderer{
    
    public gl: WebGLRenderingContext;
    private renderer: ColorRenderer;
    
    public constructor(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string){
	    this.gl = gl;

        this.renderer = new ColorRenderer(this.gl,vertexShaderId,fragmentShaderId);
      
    }

    public clear(color: Color): void{
        this.renderer.clear(color)
    }

    public drawImageExact(tex: Texture, x: number, y: number): void{
        for(var tx=0;tx<tex.size.x;tx++){
            for(var ty=0;ty<tex.size.y;ty++){
                this.renderer.rect(
                    x+tx,
                    y+ty,
                    1,
                    1,
                    tex.getColor(tx,ty)
                )
            }
        }
    }
    public drawImageWH(tex: Texture, x: number, y: number, width: number, height: number): void{
        for(var tx=0;tx<tex.size.x;tx++){
            for(var ty=0;ty<tex.size.y;ty++){
                this.renderer.rect(
                    x+tx,
                    y+ty,
                    1,
                    1,
                    tex.getColor(tx,ty)
                )
            }
        }
    }
}