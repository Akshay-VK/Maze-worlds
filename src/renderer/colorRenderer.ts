import { WebglUtil } from "../util/webgl";

export class ColorRenderer{

    public gl: WebGLRenderingContext;

    private vs: WebGLShader;
    private fs: WebGLShader;

    private program: WebGLProgram;

    private glUtil: WebglUtil;

    public constructor(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string){
        this.gl=gl;

        this.glUtil = new WebglUtil();
        
        this.vs = this.glUtil.createShader(this.gl,this.gl.VERTEX_SHADER,vertexShaderId);
        this.fs = this.glUtil.createShader(this.gl,this.gl.FRAGMENT_SHADER,fragmentShaderId);
        
        this.program = this.glUtil.createProgram(this.gl,this.vs,this.fs);
    }
}