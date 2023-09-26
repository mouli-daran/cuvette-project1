const food = require("./food.json");


// 1. list all the food items

const allFood = food.map((item) => {
    return item;
});

console.log(allFood);



// 2.list all the food items with category vegetables.

const vegItems = food.filter((foodItems) => foodItems.category === "Vegetable");

console.log(vegItems);


// 3.list all the food items with category fruit

const fruitItems = food.filter((fruits) => fruits.category === "Fruit");

console.log(fruitItems);

// 4. list all the food items with category protien

const proItems = food.filter((proFood) => proFood.category === "Protein");

console.log(proItems);

// 5. list all the food items with category nuts

const nutItems = food.filter((nutFoods) => nutFoods.category == "Nuts");

console.log(nutItems);

// 6.list all the food items with category grains

const grainItems = food.filter((grainies) => grainies.category == "Grain");

console.log(grainItems);

// 7. list all the food items with category dairy

const dairyResult = food.filter((dairyItem) => dairyItem.category == "Dairy");

console.log(dairyResult);

// 8. list all the food items with calorie above 100

const calSortAsn = food.filter((calVal) => calVal.calorie > 100);

console.log(calSortAsn);

// 9. list all the food items with calorie below 100

const calSortDsn = food.filter((calVal) => calVal.calorie < 100);

console.log(calSortDsn);

// 10. list all the food items with highest protien content to lowest

const sorting = food.sort((val1 , val2) => val2.protiens - val1.protiens);

console.log(sorting);

// 11. list all the food items with lowest cab content to highest

const cabSort = food.sort((val1 , val2) => val1.cab - val2.cab);

console.log(cabSort);


