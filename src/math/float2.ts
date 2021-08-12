export class float2{
	public x: number;
	public y: number;
	public constructor(x: number, y: number){
		this.x = x;
		this.y = y;
	}
	public static add(a: float2, b: float2): float2{
		return new float2(a.x+b.x,a.y+b.y);
	}
	public static subtract(a: float2, b: float2): float2{
		return new float2(a.x-b.x,a.y-b.y);
	}
	public static multiply(a: float2, b: float2): float2{
		return new float2(a.x*b.x,a.y*b.y);
	}
	public static divide(a: float2, b: float2): float2{
		return new float2(a.x/b.x,a.y/b.y);
	}
	public static magnitude(a: float2): number{
		return Math.sqrt(a.x*a.x+a.y*a.y);
	}
	public static from(a: number): float2{
		return new float2(a,a);
	}
	public within(a: float2,b:float2): boolean{
		return (this.x > a.x && this.x < b.x && this.y < a.y && this.y > b.y) ? false : true;
	}
	public static get ZERO(): float2{
		return new float2(0,0);
	}
	public static get ONE(): float2{
		return new float2(1, 1);
	}
}
