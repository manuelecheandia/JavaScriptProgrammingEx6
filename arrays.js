/*
    Author: Manuel Echeandia Pais
    Desc: Arrays Exercise
    Date: 02/14/2023
*/

// 1. Create an array called instructors and initialize it with the following values:
// Carter, Cusack, Murray, Ryan, Pieroni
let instructors = ["Carter", "Cusack", "Murray", "Ryan", "Pieroni"];

// 2. Log the item in the 3rd position to the console
console.log("The third item is: " + instructors[2]);

// 3. Change the item in the 4th position to Burchill and then log this item to the console.
instructors[3] = "Burchill";
console.log("The fourth item is: " + instructors[3]);

// 4. Remove Carter from the array using the appropriate method
instructors.shift();

// 5. Using a for loop, output all of the elements in the array.
for (let i = 0; i < instructors.length; i++) {
  console.log(instructors[i]);
}

// 6. Add Murphy as the first item in the array using the appropriate method
instructors.unshift("Murphy");

// 7. Add Croney to the end of the array using the appropriate method
instructors.push("Croney");

// 8. Sort the instructors array
instructors.sort();

// 9. Using a for-in loop, output all of the elements in the array.
for (let i in instructors) {
  console.log(instructors[i]);
}

// 10. Use the slice method to create a copy of the array. Name the array instructorsCopy. The array should only include the names Cusack, Murray, Murphy
let instructorsCopy = instructors.slice(2, 5);

// 11. Remove Murray from the instructorsCopy array using the appropriate method.
instructorsCopy.pop();

// 12. Using the forEach method, output all of the elements in the instructorsCopy array
console.log("\nThe items currently in the instructorsCopy array are:");
instructorsCopy.forEach((instructor) => {
  console.log(instructor);
});
