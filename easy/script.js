//Create an array of students holding their last name, first name, and age 
//with 3 students. To validate, please log a greeting with the first name, 
//last name and age of the 2nd student. The output should look like 
//"Hello, my name is John Doe and I'm 19 years old.

const students = [
    //curly braces within an array= holding an object/"key value pairs"
    //object= index/value
    { 
        firstName: 'Quinta',
        lastName: 'Brunson',
        age: '33',
    },
    {
        firstName: 'Sheryl Lee',
        lastName: 'Ralph',
        age: '66',
    },
    {
        firstName: 'Tyler James',
        lastName: 'Williams',
        age: '30',

    }
]

console.log(`Hello, my name is ${students[1].firstName} ${students[1].lastName} and I'm ${students[1].age} years old`)

//(.) =directory for objects, if you have objects within objects you call it by its corresponding (.)
//in this example, firstName, lastName, and age are all "keys" within the object which is the value of i=1