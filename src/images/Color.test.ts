import { Color } from "./Color"

test("Testing color class.",()=>{
    var col : Color = new Color(255,255,0,255);
    expect(col.r).toBe(255);
    expect(col.normalized).toEqual(new Color(1,1,0,1));
})