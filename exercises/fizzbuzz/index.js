// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // 1. Start small: Let's get the numbers 1 - n to print! 
    for (let i = 1; i <= n; i++){
        // 2. Now we need to introduce the special cases... the question here is what values to check for first 
        // 15 will be both a multiple of 3 and 5, for example - so i think we check for multiples of both, then check for multiples of 5, then 3
        //* in decreasing value 👆 
        if (i % 15 === 0){
            console.log("fizzbuzz");
        } else if (i % 3 ===0){
            console.log("fizz"); 
        } else if(i % 5 === 0){
            console.log("buzz")
        } else console.log(i); 
    }
}

module.exports = fizzBuzz;
