import {updateQuality} from "../src/shop";
import {TEST_ITEMS} from "./regressionTestConfig";
import expectedItems from "./expectedData.json";
import exp from "constants";

describe("Shop regression test", () => {
    it("should have unchanged output", () => {
        // arrange
        let updatedItems = TEST_ITEMS;
        for (let i = 0; i < 20; i++) {
            // act
            updatedItems = updateQuality(updatedItems);
            
            // assert
            expect(updatedItems).toEqual(expectedItems[i].items);
        }
    })
});