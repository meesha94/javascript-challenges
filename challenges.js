//function that takes a number and returns if it is positive or negative

const isNumberPositive = (number) => {
    if (number >= 0) {
        console.log (`${number} is positive`)
    } else {
        console.log(`${number} is negative`)
    }
}
isNumberPositive(-1);
isNumberPositive(10);

//function that takes a number of days and converts into an age

const convertDaysToAge = (days) => {
   let age = days / 365
    console.log( Math.round(age) + " years")
}
convertDaysToAge(3650);
convertDaysToAge(6570);


//function that takes three numbers and returns the largest number 

const getLargestNumber = (firstNumber, secondNumber, thirdNumber) => {
    console.log(Math.max(firstNumber, secondNumber, thirdNumber))
}

getLargestNumber(2,1,4);
getLargestNumber(6,2,3);

//funtion that takes an array of names and returns the last name in the array

let listOfNames = ["Charlie","Rob","Andy"]
//let listOfNames = ["Ash", "Stu"]

const getLastName =(listOfNames) => {
console.log(listOfNames.slice(-1));
}
getLastName(listOfNames);


//function that takes an array of numbers  and returns true if all numbers are postive and false if there one or more negative numbers

const listOfNumbers = [2, 4, 5];

//const listOfNumbers = [-5, 4, 6];

const allNumbersPositive = (listOfNumbers) => {
    console.log(listOfNumbers > 0)
}
listOfNumbers.every(allNumbersPositive)