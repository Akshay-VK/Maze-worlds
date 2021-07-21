import { dim2 } from "../math/Dim2";
import { float2 } from "../math/float2";

export class SpriteSheet{
    private image: HTMLImageElement;

    private dimensions: dim2;

    private locations: Object;

    private unitSize: float2;

    public constructor(img: HTMLImageElement, unitSize: float2, locations: Object){

        if(Math.floor(img.width/unitSize.x) != img.width/unitSize.x || Math.floor(img.height/unitSize.y) != img.height/unitSize.y){
            throw new Error('size not divisible by unitSize');
        }
        if(img.width < unitSize.x || img.height < unitSize.y){
            throw new Error('The unit size provided is bigger than the image itself');
        }

        this.image = img;

        this.dimensions = new dim2(0,0,img.width,img.height);

        this.unitSize = unitSize;

        this.locations = locations;


    }
    public getImage(key: string): dim2{
        if(this.locations[key]){
            var loc: float2 = this.locations[key];

            return new dim2(loc[0]*this.unitSize.x,loc[1]*this.unitSize.y, this.unitSize.x, this.unitSize.y);
        }else{
            throw new Error('key doesn\'t exist');
        }
    }
}