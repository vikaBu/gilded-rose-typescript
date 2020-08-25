import {updateQuality} from "../src/shop";
import {writeFileSync} from "fs";
import {TEST_ITEMS} from "./regressionTestConfig";

const copyOf = (items: any[]): any[] => {
    return items.map(item => {
        return {
            name: item.name,
            sellIn: item.sellIn,
            quality: item.quality
        }
    })
}

let results = [];
let updatedItems = TEST_ITEMS;
for (let i = 1; i <= 20; i++) {
    updatedItems = updateQuality(updatedItems);
    results.push({ day: i, items: copyOf(updatedItems) });
}

const fileContent = JSON.stringify(results, null, 2);
writeFileSync("tests/expectedData.json", fileContent);