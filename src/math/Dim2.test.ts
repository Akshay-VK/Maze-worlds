import {dim2} from "./Dim2";
import {float2} from "./float2";

test("Testing dim2 operation: getters",()=>{
	var a: dim2 = new dim2(10,10,10,10);
	var b: dim2 = new dim2(15,15,10,10);

	expect(a.position).toEqual(new float2(10,10));
	expect(b.size).toEqual(new float2(10,10));
});
test("Testing dim2 operation: setters",()=>{
	var a: dim2 = new dim2(10,10,10,10);
	var b: dim2 = new dim2(15,15,10,10);

	a.setPos(new float2(20,20));
	expect(a.position).toEqual(new float2(20,20));
});
test("Testing collision",()=>{
	var a: dim2 = new dim2(10,10,10,10);
	var b: dim2 = new dim2(15,15,10,10);

	expect(dim2.collides(a,b)).toBe(true);
});