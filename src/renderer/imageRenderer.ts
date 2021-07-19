import { collapseTextChangeRangesAcrossMultipleVersions } from "../../node_modules/typescript/lib/typescript";
import { Color } from "../images/Color";
import { float2 } from "../math/float2";
import { WebglUtil } from "../util/webgl";

export class ImageRenderer{
    
    public gl: WebGLRenderingContext;

    private vs: WebGLShader;
    private fs: WebGLShader;

    private program: WebGLProgram;

    private glUtil: WebglUtil;

    //shader locations
    private a_posLoc: number;
    private a_texcoordLoc: number;
    private u_resLoc: WebGLUniformLocation;

    //buffers
    private positionBuffer: WebGLBuffer;
    private texCoordBuffer: WebGLBuffer;

    public constructor(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string){
	    this.gl = gl;

	    this.glUtil = new WebglUtil();

        this.vs = this.glUtil.createShader(this.gl,this.gl.VERTEX_SHADER,vertexShaderId);
        this.fs = this.glUtil.createShader(this.gl,this.gl.FRAGMENT_SHADER,fragmentShaderId);

        this.program = this.glUtil.createProgram(this.gl,this.vs,this.fs);

	    //get locations
        this.a_posLoc = this.gl.getAttribLocation(this.program,"a_pos");
	    this.a_texcoordLoc = this.gl.getAttribLocation(this.program, "a_texcoord");
        this.u_resLoc = this.gl.getUniformLocation(this.program, "u_res");

	    this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

        this.texCoordBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer);
        
    }

    public clear(color: Color): void{
        var colorNorm = color.normalized;
        this.gl.clearColor(colorNorm.r,colorNorm.g,colorNorm.b,colorNorm.a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    public drawImage(tex: WebGLTexture, pos: float2, size: float2, imgSize: float2): void{
        this.glUtil.resizeCanvasToDisplaySize(this.gl);

        this.gl.useProgram(this.program);

        this.gl.enableVertexAttribArray(this.a_posLoc);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        
        this.gl.vertexAttribPointer(this.a_posLoc,2,  this.gl.FLOAT, false, 0,0);
        
        this.gl.uniform2f(this.u_resLoc, this.gl.canvas.width, this.gl.canvas.height);

        this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([
            pos.x,pos.y,
            pos.x,pos.y+size.y,
            pos.x+size.x,pos.y,
            pos.x+size.x,pos.y,
            pos.x,pos.y+size.y,
            pos.x+size.x,pos.y+size.y
        ]), this.gl.STATIC_DRAW);

        this.gl.enableVertexAttribArray(this.a_texcoordLoc);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        
        this.gl.vertexAttribPointer(this.a_texcoordLoc,2,  this.gl.FLOAT, false, 0,0);

        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            0.0,  0.0,
            1.0,  0.0,
            0.0,  1.0,
            0.0,  1.0,
            1.0,  0.0,
            1.0,  1.0,
        ]), this.gl.STATIC_DRAW);

        this.gl.bindTexture(this.gl.TEXTURE_2D, tex);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }
}