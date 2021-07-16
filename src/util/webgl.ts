export class WebglUtil{
    constructor(){

    }
    public createShader(gl: WebGLRenderingContext,shaderType: number,shaderSourceId: string): WebGLShader{
        var shaderSourceElem: HTMLScriptElement = document.getElementById(shaderSourceId) as HTMLScriptElement;
        var shaderSource = shaderSourceElem.text;

        var shader = gl.createShader(shaderType);
        gl.shaderSource(shader,shaderSource);
        gl.compileShader(shader);

        if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
            return shader;
        }
        console.log(gl.getShaderInfoLog(shader))
        gl.deleteShader(shader);
    }

    public createProgram(gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader): WebGLProgram{
        var program = gl.createProgram();

        gl.attachShader(program, vs);
        gl.attachShader(program, fs);

        gl.linkProgram(program);

        if(gl.getProgramParameter(program, gl.LINK_STATUS)){
            return program;
        }
        console.log(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
    }
}