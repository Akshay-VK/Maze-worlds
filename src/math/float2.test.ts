import {float2} from './float2';

test("Testing float2 operations",()=>{
	var a: float2 = new float2(30,40);
	var b: float2 = new float2(10,10);
	expect(float2.subtract(a,b)).toEqual(new float2(20,30));
	expect(float2.add(a,b)).toEqual(new float2(40,50));
	expect(float2.multiply(a,b)).toEqual(new float2(300,400));
	expect(float2.divide(a,b)).toEqual(new float2(3,4));
	expect(float2.magnitude(a)).toBe(50);
});
