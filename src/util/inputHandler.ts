export class InputHandler{

    private cnv: HTMLCanvasElement;

    public constructor(cnv: HTMLCanvasElement){
        this.cnv = cnv;
        this.cnv.addEventListener('keydown',(e: KeyboardEvent)=>this.handleKeys(e.code));
    }

    private handleKeys(key: string): void{
        //handle keys
        switch (key) {
            case 'KeyW':
                console.log('w')
                break;
            case 'KeyW':
                console.log('w')
                break;
            case 'KeyW':
                console.log('w')
                break;
            case 'KeyW':
                console.log('w')
                break;
                    
            default:
                break;
        }
    }
}