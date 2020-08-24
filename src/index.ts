﻿import { updateQuality } from "./shop";
import items from "./stock.json";

let updatedItems = [...items];
for (let i = 0; i <= 5; i++) {
    console.log(`\n\nDay: ${i}`);
    console.log(`---------`);
    updatedItems = updateQuality(updatedItems);
    console.log(`\n${"Name".padEnd(50)} | ${"Sell In".padEnd(10)} | ${"Quality".padEnd(10)}`);
    console.log("".padEnd(76, "="));
    updatedItems.forEach(item => {
        console.log(`${item.name.padEnd(50)} | ${item.sellIn.toString().padEnd(10)} | ${item.quality.toString().padEnd(10)}`);         
    });
}