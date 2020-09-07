﻿interface Item {
    name: string;
    quality: number;
    sellIn: number;
}
const isLegendary = (item: Item): boolean => {
    return item.name === 'Sulfuras, Hand of Ragnaros';
}
const isAgedBrie = (item: Item): boolean => {
    return item.name === 'Aged Brie';
}
const isBackstagePass = (item: Item): boolean => {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}
const isConjuredItem = (item: Item): boolean =>{
    return item.name === 'Conjured Item';
}

const getUpdatedSellIn = (item: Item): number => {
    if (isLegendary(item)) {
        return item.sellIn;
    }
    return item.sellIn - 1;
}
const getUpdatedRegularItemQuality = (item: Item): number => {
    let newQuality = item.quality - 1

    if (isExipred(item)) {
        newQuality--;
    }
    if (newQuality <= 0) {
        newQuality = 0;
    }
    return newQuality;
}


const getUpdatedBackstagePassQuality = (item: Item): number => {
    let newQuality = item.quality + 1;
    if (item.sellIn < 11) {
        newQuality++;
    }
    if (item.sellIn < 6) {
        newQuality++;
    }
    if (newQuality >= 50) {
        newQuality = 50;
    }
    if (isExipred(item)) {
        newQuality = 0;
    }

    return newQuality;
}

const isExipred = (item: Item): boolean => {
    if (item.sellIn <= 0) {
        return true;
    }
    return false;

}

const getUpdatedAgedBrieQuality = (item: Item): number => {
    let newQuality = item.quality + 1;
    if (isExipred(item)) {
        newQuality++;
    }
    if (newQuality >= 50) {
        newQuality = 50;
    }
    return newQuality;
}

const getUpdatedConjuredItemQuality = (item: Item): number => {
    let newQuality = item.quality -2 ;

    if (isExipred(item)) {
        newQuality= newQuality -2;
    }
    if (newQuality <= 0) {
        newQuality = 0;
    }
    return newQuality;

}
const getUpdatedQuality = (item: Item): number => {

    if (isLegendary(item)) {
        return item.quality;
    }
    if (isAgedBrie(item)) {
        return getUpdatedAgedBrieQuality(item);
    }
    if (isBackstagePass(item)) {
        return getUpdatedBackstagePassQuality(item);
    }
    if (isConjuredItem(item)){
        return getUpdatedConjuredItemQuality(item);
    }
    return getUpdatedRegularItemQuality(item);
    


}
export const updateQuality = (items: Item[]): Item[] => {
    items.forEach((item: Item) => {
        item.quality = getUpdatedQuality(item);
        item.sellIn = getUpdatedSellIn(item);


    });

    return items;
}