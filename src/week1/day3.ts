import { arrayBuffer } from "stream/consumers";

const fruits: string[] = ['Apple', 'Orange', 'Banana'];
let newFruit: string = 'Papaya';
let num: number[] = [1,2,3,4]; 
console.log(fruits);

//-------Push-----------------------------
fruits.push(newFruit);
console.log('New push in is: ' + newFruit);
//-------Pop-------------------------------
console.log(`one pop is: ${fruits.pop()}`);
//-------Map-------------------------------
const newFruits = new Map<number, string[]>([
    [0, ['Mango']],
    [1, ['Tomato']],
]);
newFruits.set(2,['Coconut']);
console.log(`New fruit is: ${newFruits.get(2)}`);
fruits.map(word => console.log(word));
//--------filter-----------------------------------------
const result = fruits.filter(word => word.length > 5);
console.log('This is function filter: ' + result);
//--------forEach----------------------------------------
fruits.forEach(element => console.log(element))
//--------reduce-----------------------------------------
const initDex: number = 0;
const sum: number = num.reduce((preValue,curValue) => preValue + curValue, initDex );
console.log('Sum value num is: ' + sum);
//-------Object.values---------------------------------
const test = {
    1: 'Fruit Big big',
    3: 56,
    2: true,
};
// console.log(Object.values(object1));
// console.log(Object.keys(object1));
for (const [key, value] of Object.entries(test)){
    console.log(`${key} ${value}`);
}
//-------Destructuring----------------------------------
const objFruits = {
    id: 1,
    name: 'Watermalon'
}
const {id, name}:{id: number, name: string} =  objFruits;
//-------Spread------------------------------------------
const spread = {...objFruits,fruits,newFruit,newFruits};
console.log(spread);









