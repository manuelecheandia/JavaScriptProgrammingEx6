/*
    Author: Manuel Echeandia Pais
    Desc: Working with arrays
    Date: 02/09/2023
*/

let cars = ["Wrangler", "Forester", "Tacoma", "4-Runner", "Defender"];

console.log(cars);

cars[5] = "Tundra";
cars.push("Corolla"); // push always add to the end. No gap
cars[0] = "Bronco";
cars.unshift("Wrangler"); //inshift is similar to push but adds it to the begnning, not the end

cars[0] = "Wrangler :";
cars[9] = "Land Cruiser"; //we skipped index 8 to demo an undefined element.

console.log(cars);

let makes = new Array("Jeep", "Subaru", "Toyota", "Ford", "Land Rover");

makes.push("Lada");
makes.unshift("Kia");

console.log(makes);

let firstArray = [];
firstArray.push("Trudy");
firstArray.push("Miguel", "Stanley");
firstArray.push("Chris");

console.log(firstArray);

let mySecondArray = ["Dylan", "Sara", "Adrian"];

firstArray.push(...mySecondArray);

console.log(firstArray);

for (let i = 0; i < firstArray.length; i++) {
  console.log(`Name: ${firstArray[i]}`);
}

for (let i in firstArray) {
  console.log(`${firstArray[i]}`);
}

for (let n of firstArray) {
  console.log(n);
}

let numbers = [2, 1, 13, 3, 45, 5, 100, 202, 20, 30, 50, 42];
console.log(numbers);

//alphanumeric sorting even with an array with true numbers
numbers.sort();
console.log(numbers);

//To sort numerical , we need to provide a sort function to the sort method
numbers.sort((x, y) => {
  return x - y;
});
console.log(numbers);

//sort by desc numerical order
numbers.sort((a, b) => {
  return b - a;
});
console.log(numbers);

//Descending order of strings
firstArray.sort().reverse();

console.log(firstArray);
