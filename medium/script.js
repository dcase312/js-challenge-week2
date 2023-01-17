//Create a program that accepts a number (1-12) as input and logs to the console 
//that number and its corresponding month. For example: if the user enters the 
//number 3, then it should return the month “March.” Alert the user if they enter 
//an invalid number (e.g. less than 1 or greater than 12)


const monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July",
"August", "September", "October", "November", "December"]

// "||" is the or operator

// This If condition evaluates if the user input is 0 OR greater than 13 and throws the error alert Otherwise it continues to match the input with the correct month
let userInput = prompt("Please enter a number between 1-12") 

if (userInput == 0 || userInput > 12) {

    alert ("Please enter a number between 1 and 12")

}else if (userInput > 0 < 13) {

    // Because array's index start at 0 we have to subtract 1 from the user input to correct the index's being behind by 1

     //alert(monthsOfTheYear[userInput - 1], userInput)
console.log(monthsOfTheYear[userInput -1], userInput)
}



 

