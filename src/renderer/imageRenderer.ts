import { Color } from "../images/Color";
import { WebglUtil } from "../util/webgl";

export class ImageRenderer{
    
    public gl: WebGLRenderingContext;

    private vs: WebGLShader;
    private fs: WebGLShader;

    private program: WebGLProgram;

    private glUtil: WebglUtil;

    //shader parameters
    private a_posLoc: number;
    private a_texcoordLoc: number;
    private u_resLoc: WebGLUniformLocation;

    //buffers
    private positionBuffer: WebGLBuffer;
    private texcoordBuffer: WebGLBuffer;

    private plainTex: WebGLTexture;

    //variable to check if the same image was provided or not
    private prevImage: HTMLImageElement;
    
    public constructor(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string){
	    this.gl = gl;

        this.glUtil = new WebglUtil();

        this.vs = this.glUtil.createShader(this.gl,this.gl.VERTEX_SHADER,vertexShaderId);
        this.fs = this.glUtil.createShader(this.gl,this.gl.FRAGMENT_SHADER,fragmentShaderId);

        this.program = this.glUtil.createProgram(this.gl,this.vs,this.fs);

        this.gl.useProgram(this.program);

        //get locations
        this.a_posLoc = this.gl.getAttribLocation(this.program,"a_pos");
        this.a_texcoordLoc = this.gl.getAttribLocation(this.program,"a_texcoord");
        this.u_resLoc = this.gl.getUniformLocation(this.program, "u_res");

        if(this.a_texcoordLoc == -1){
            this.a_texcoordLoc = 1;
        }

        //create and set buffers
        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);       

        this.texcoordBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texcoordBuffer);
        

        //create texture
        this.plainTex = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.plainTex);
        
        // Set the parameters so we can render any size image.
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST); 
    }

    public clear(color: Color): void{
        var colorNorm = color.normalized;
        this.gl.clearColor(colorNorm.r,colorNorm.g,colorNorm.b,colorNorm.a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    public drawImage(tex: HTMLImageElement, x: number, y: number, w?: number, h?: number, sx?: number, sy?: number, sw?: number, sh?: number): void{
        
        this.gl.useProgram(this.program);

        var width: number, height: number;

        if(w&&h){
            width = w;
            height = h;
        }else{
            width = tex.width;
            height = tex.height;
        }
        // Upload the image into the texture.
        //TODO: DO NOT upload the data every time as it can cause performance problems
        if(this.prevImage != tex){
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, tex);
            this.prevImage = tex;
        }
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.plainTex);

        //rect
        this.glUtil.resizeCanvasToDisplaySize(this.gl);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([
            x,y,
            x,y+height,
            x+width,y,
            x+width,y,
            x,y+height,
            x+width,y+height
        ]),this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(this.a_posLoc);
        this.gl.vertexAttribPointer(this.a_posLoc, 2, this.gl.FLOAT, false, 0, 0);

        //texture
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.texcoordBuffer);
        if(sx&&sy&&sw&&sh){
            var x1 = sx/tex.width;
            var y1 = sy/tex.height;
            var x2 = x1+(sw/tex.width);
            var y2 = y1+(sh/tex.height);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
                x1,y1,
                x1,y2,
                x2,y1,
                x2,y1,
                x1,y2,
                x2,y2
            ]), this.gl.STATIC_DRAW);
        }else{
            this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
                0.0,  0.0,
                0.0,  1.0,
                1.0,  0.0,
                1.0,  0.0,
                0.0,  1.0,
                1.0,  1.0
            ]), this.gl.STATIC_DRAW);
        }
    
        this.gl.enableVertexAttribArray(this.a_texcoordLoc);
    
        this.gl.vertexAttribPointer(this.a_texcoordLoc, 2, this.gl.FLOAT, false, 0, 0);

        this.gl.uniform2f(this.u_resLoc, this.gl.canvas.width, this.gl.canvas.height);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    }
}
