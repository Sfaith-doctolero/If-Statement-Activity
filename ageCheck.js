//Name: Javinar, Stephanie Faith D. 
//Course, Year, & Section: BSCS 1D

//program that prompts user to enter their age.
let age = prompt("Enter your age:");
//convert string to a number
age = Number(age);

//conditional statement to determine which category the user is in.
if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}