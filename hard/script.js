//HARD: Given the information below for Tom and Jerry. 
//Tom - 	height:  9in   	mass: 8 g
//Jerry - 	height: 10in 	mass: 45 g
//Compare the BMI (Body Mass Index) of Tom & Jerry using a standard BMI formula:
 
//1 Store Tom & Jerry’s mass and height as variables.
//2 Calculate both their BMI’s. 
//3 Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. 
//Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

// const massHeight = [
//     {jerryHeight: "10in",
//     jerryMass: "45g"},

//      {tomHeight: "9in",
//     tomMass: "8g"}
// ]

const jerryHeight = 10
const jerryMass = 45
const tomHeight = 9
const tomMass = 8

function bmiFormula(a, b){
   return a/=b*b
}
//console.log(bmiFormula(jerryMass, jerryHeight))
//console.log(bmiFormula(tomMass, tomHeight))
//for if else statement I need variables so I gave each bmi function for tom and jerry variables

const jerryBmi = bmiFormula(45, 10)
const tomBmi = bmiFormula(8, 9)

//this is a ternary operator it's a shorthand property of the if else statement
//after the question mark the first statement executes when true and the second when false

const checkBmi = jerryBmi < tomBmi ? true : false

console.log(tomBmi)
console.log(jerryBmi)

console.log(`Is Tom's BMI higher than Jerry's? ${checkBmi}`)




