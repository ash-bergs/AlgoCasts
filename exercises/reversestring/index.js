// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//* Solo Attempt Psuedo-Code: 
/*
    1. Split the string into an array of letters, //? order should be maintained? 
    2. Use reverse method to reverse the order of the array in-place 
    3. Join the reversed array and return it! 

    ! This ended up being the same answer given in the Coding Interview Bootcamp course as well! 
*/

// function reverse(str) {
//     return str.split("").reverse().join(""); 
// }

//* The "With a Little Help From Google" approach 
//? What if we can't use that oh-so-handy reverse method?

// function reverse(str) {
//     // using 🌈for loop🌈
//     // no need to cast str into an array and then back into a string! 
//     let reversedStr = ""; 

//     // use a for loop to step *backwards* through the array 
//     for (let i = str.length - 1; i >= 0; i--) { 
//         // concatenate current index to reversedStr
//         reversedStr += str[i]; 
//     }

//     return reversedStr; 
// }

//* #2 solution from the Coding Interview Bootcamp course
// 🌈 for-of loop 🌈 - ES6 syntax - see notes 
// can be better to use than a traditional for loop because it's less prone to typos and other small, hard to find errors

// function reverse(str) {
//     let newStr = ""; 

//     for (let letter of str){
//         newStr = letter + newStr; 
//     }

//     return newStr; 
// }

//* #3 solution from the Coding Interview Bootcamp course
//* 🌈 Reduce Helper 🌈

function reverse(str) {
    return str.split("").reduce((reversed, char) => char + reversed, ""); 
}

module.exports = reverse;
