import { Light } from "../lights/Light";
import { float2 } from "../math/float2";
import { WebglUtil } from "../util/webgl";

export class LightRenderer{

    private gl: WebGLRenderingContext;
    private glUtil:WebglUtil;

    private vs: WebGLShader;
    private fs: WebGLShader;
    private program: WebGLProgram;

    private a_posLoc: number;
    private d_posLoc: number;
    private u_resLoc: WebGLUniformLocation;
    private u_lightsLoc: WebGLUniformLocation[];

    public lights: Light[];
    private lightCounter: number;

    private posBuffer: WebGLBuffer;
    private dPosBuffer: WebGLBuffer;

    private unitSize: float2;
    constructor(gl: WebGLRenderingContext, vertexShaderId: string, fragmentShaderId: string, unitSize: float2){
        this.gl = gl;
        this.glUtil = new WebglUtil();

        this.unitSize = unitSize;

        this.vs = this.glUtil.createShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderId);
        this.fs = this.glUtil.createShader(this.gl,this.gl.FRAGMENT_SHADER,fragmentShaderId);

        this.program = this.glUtil.createProgram(this.gl, this.vs, this.fs);

        this.gl.useProgram(this.program);

        //getting locations
        this.a_posLoc = this.gl.getAttribLocation(this.program,"a_pos");
	    this.d_posLoc = this.gl.getAttribLocation(this.program, "d_pos");
        this.u_resLoc = this.gl.getUniformLocation(this.program, "u_res");

        this.u_lightsLoc = new Array<WebGLUniformLocation>(10);
        for(var i = 0; i < 10; i++){
            this.u_lightsLoc[i] = this.gl.getUniformLocation(this.program, `lights[${i}]`);
        }

        this.posBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.posBuffer);
    
	    this.dPosBuffer = this.gl.createBuffer();
	    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.dPosBuffer);

        this.lights = new Array<Light>(10);
        this.lights.fill(new Light(0,0,0));
        this.lightCounter = 0;
    }
    public addLight(light: Light): number{
        if(this.lightCounter < 10){
            this.lights[this.lightCounter] = light;
            this.lightCounter++;
            return this.lightCounter;
        }else{
            throw new Error("Maximum light limit reached.");
        }
    }
    public removeLight(id: number): void{
        if(id < 10){
            this.lights[id] = new Light(0,0,0);
        }else{
            throw new Error("Invalid ID");
        }
    }
    public render(){
        this.glUtil.resizeCanvasToDisplaySize(this.gl);

        this.gl.useProgram(this.program);

        //enable position attribute
        this.gl.enableVertexAttribArray(this.a_posLoc);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.posBuffer);

        this.gl.vertexAttribPointer(this.a_posLoc,2,this.gl.FLOAT,false,0,0);

        //set canvas resolution uniform
        this.gl.uniform2f(this.u_resLoc, this.gl.canvas.width,this.gl.canvas.height);

        var positions: Float32Array;
        var posT = [];
        //generating coordinates
        for(var y = 0; y < this.gl.canvas.height; y += this.unitSize.y){
            for(var x = 0; x < this.gl.canvas.width; x += this.unitSize.x){
                posT.push(x);
                posT.push(y);
                posT.push(x);
                posT.push(y+this.unitSize.y);
                posT.push(x+this.unitSize.x);
                posT.push(y);
                posT.push(x+this.unitSize.x);
                posT.push(y);
                posT.push(x);
                posT.push(y+this.unitSize.y);
                posT.push(x+this.unitSize.x);
                posT.push(y+this.unitSize.y);

            }
        }
        positions = new Float32Array(posT);

        //putting data
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.DYNAMIC_DRAW);

        //enable light calculation positions
        this.gl.enableVertexAttribArray(this.d_posLoc);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.dPosBuffer);

        this.gl.vertexAttribPointer(this.d_posLoc,2,this.gl.FLOAT, false, 0,0);

        posT = [];
        //set positions
        for(var y = 0; y < this.gl.canvas.height; y += this.unitSize.y){
            for(var x = 0; x < this.gl.canvas.width;x += this.unitSize.x){
                for(var j = 0; j < 6; j++){
                    posT.push(x);
                    posT.push(y);
                }
            }
        }
        positions = new Float32Array(posT);

        //putting data
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.DYNAMIC_DRAW);

        //setting each light uniform as vec3
        for(var i = 0; i < 10; i++){
            var d =this.lights[i].getAsVec3;
            this.gl.uniform3f(this.u_lightsLoc[i], d["x"], d["y"], d["z"]);
        }

        //funal draw call
        this.gl.drawArrays(this.gl.TRIANGLES, 0, posT.length/2);
    }
}