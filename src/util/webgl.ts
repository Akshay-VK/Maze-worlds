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
    public resizeCanvasToDisplaySize(gl: WebGLRenderingContext): void{
        // Lookup the size the browser is displaying the canvas in CSS pixels.
        const displayWidth: number  = gl.canvas.clientWidth;
        const displayHeight: number = gl.canvas.clientHeight;
        
        // Check if the canvas is not the same size.
        const needResize = gl.canvas.width  !== displayWidth ||
                            gl.canvas.height !== displayHeight;
        
        if (needResize) {
            // Make the canvas the same size
            gl.canvas.width  = displayWidth;
            gl.canvas.height = displayHeight;
        }

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    }
    public createTextureFromImage(img: HTMLImageElement, gl: WebGLRenderingContext): WebGLTexture{
        var texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        
        // Set the parameters so we can render any size image.
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        
        return texture;
    }
}