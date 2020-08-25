import {updateQuality} from "../src/shop";

describe("The update item function", () => {
   describe("updates the sell in property", () => {
       it("keeping constant for legendary items", () => {
           // arrange
           const items = [
               { name: "Sulfuras, Hand of Ragnaros", sellIn: 10, quality: 20 },
           ];
           
           // act
           const updatedItems = updateQuality(items);
           
           // assert
           expect(updatedItems[0].sellIn).toBe(10);
       })
       
       it("decreases value by one for regular items", () => {
           const items = [{ name: "Regular Item", sellIn: 10, quality: 20 }];
           const updatedItems = updateQuality(items);
           expect(updatedItems[0].sellIn).toBe(9);
       })
       
       it("still decreases by one if negative", () => {
           const items = [{ name: "Regular Item", sellIn: 0, quality: 20 }];
           const updatedItems = updateQuality(items);
           expect(updatedItems[0].sellIn).toBe(-1);
       })
   }) 
});