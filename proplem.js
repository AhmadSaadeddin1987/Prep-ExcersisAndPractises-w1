const fruits = ["apple", "rottenBanana", "mango"];

const takeOutRottenFruit = (arrayOfFruits) => arrayOfFruits.filter(fruit => !fruit.includes("rotten"));
console.log(takeOutRottenFruit(fruits));