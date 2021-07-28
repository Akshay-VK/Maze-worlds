export class InputHandler{
	
	public keys: Object;

    public constructor(){
		this.keys={
			"w": false,
			"a": false,
			"s": false,
			"d": false
		}
        window.addEventListener('keydown',(e: KeyboardEvent)=>{
            this.handleKeyDown(e.code);
        });
		window.addEventListener('keyup',(e: KeyboardEvent)=>{
            this.handleKeyUp(e.code);
        });
    }

    private handleKeyDown(key: string): void{
        //handle keys
        switch (key) {
            case 'KeyW':
				this.keys["w"] = true;
                break;
            case 'KeyA':
				this.keys["a"] = true;
                break;
            case 'KeyS':
				this.keys["s"] = true;
                break;
            case 'KeyD':
				this.keys["d"] = true;
                break;
                    
            default:
                break;
        }
    }
	private handleKeyUp(key: string): void{
        //handle keys
        switch (key) {
            case 'KeyW':
				this.keys["w"] = false;
                break;
            case 'KeyA':
				this.keys["a"] = false;
                break;
            case 'KeyS':
				this.keys["s"] = false;
                break;
            case 'KeyD':
				this.keys["d"] = false;
                break;
                    
            default:
                break;
        }
    }
}