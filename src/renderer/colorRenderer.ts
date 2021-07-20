import { WebglUtil } from "../util/webgl";
import { Color } from "../images/Color";

export class ColorRenderer{

    public gl: WebGLRenderingContext;

    private vs: WebGLShader;
    private fs: WebGLShader;

    private program: WebGLProgram;

    private glUtil: WebglUtil;

    //shader parameters
    private a_posLoc: number;
    private u_resLoc: WebGLUniformLocation;
    private u_colorLoc: WebGLUniformLocation;

    //buffers
    private positionBuffer: WebGLBuffer;

    public constructor(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string){
        this.gl=gl;

        this.glUtil = new WebglUtil();
        
        this.vs = this.glUtil.createShader(this.gl,this.gl.VERTEX_SHADER,vertexShaderId);
        this.fs = this.glUtil.createShader(this.gl,this.gl.FRAGMENT_SHADER,fragmentShaderId);
        
        this.program = this.glUtil.createProgram(this.gl,this.vs,this.fs);

        this.gl.useProgram(this.program);

        //get locations
        this.a_posLoc = this.gl.getAttribLocation(this.program,"a_pos");
        this.u_resLoc = this.gl.getUniformLocation(this.program, "u_res");
        this.u_colorLoc = this.gl.getUniformLocation(this.program, "u_color");

        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        

    }

    clear(color: Color){
        var colorNorm = color.normalized;
        this.gl.clearColor(colorNorm.r,colorNorm.g,colorNorm.b,colorNorm.a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    public rect(x: number, y: number, width: number, height: number, color: Color){
        this.glUtil.resizeCanvasToDisplaySize(this.gl);

        this.gl.useProgram(this.program);

        this.gl.enableVertexAttribArray(this.a_posLoc);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer);

        this.gl.vertexAttribPointer(this.a_posLoc,2,this.gl.FLOAT,false,0,0);

        this.gl.uniform2f(this.u_resLoc, this.gl.canvas.width,this.gl.canvas.height);

        this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([
            x,y,
            x,y+height,
            x+width,y,
            x+width,y,
            x,y+height,
            x+width,y+height
        ]),this.gl.STATIC_DRAW);

        var colorNorm = color.normalized;

        this.gl.uniform4f(this.u_colorLoc,colorNorm.r,colorNorm.g,colorNorm.b,colorNorm.a);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }
}