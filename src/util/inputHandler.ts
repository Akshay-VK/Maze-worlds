export class InputHandler{

    public constructor(){
        window.addEventListener('keydown',(e: KeyboardEvent)=>{
            this.handleKeys(e.code);
        });
    }

    private handleKeys(key: string): void{
        //handle keys
        switch (key) {
            case 'KeyW':
                console.log('w')
                break;
            case 'KeyA':
                console.log('a')
                break;
            case 'KeyS':
                console.log('s')
                break;
            case 'KeyD':
                console.log('d')
                break;
                    
            default:
                break;
        }
    }
}