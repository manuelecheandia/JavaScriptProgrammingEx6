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

let myArray = [];
myArray.push("Trudy");
myArray.push("Miguel", "Stanley");
myArray.push("Chris");

console.log(myArray);

let mySecondArray = ["Dylan", "Sara", "Adrian"];

myArray.push(...mySecondArray);

console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(`Name: ${myArray[i]}`);
}
