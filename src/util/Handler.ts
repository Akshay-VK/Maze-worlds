import { Player } from "../game/sprites/player/Player";
import { Sprite } from "../game/sprites/Sprite";
import { float2 } from "../math/float2";

export class Handler{
    private player: Player;
    private sprites: Sprite[];
    private screenDim: float2;
    constructor(player: Player, scrnDim: float2){
        this.player = player;
        this.screenDim=scrnDim;
        this.sprites = new Array<Sprite>();
    }
    public addSprite(sprite: Sprite){
        this.sprites.push(sprite);
    }
    public update(){
        for(var i = 0; i < this.sprites.length; i++){
            this.sprites[i].update();
        }
        this.player.update();
    }
    public render(){
        for(var i = 0; i < this.sprites.length; i++){
            this.sprites[i].render(new float2(this.player.dim.x,this.player.dim.y),this.screenDim);
        }
        this.player.render();
    }
}