// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//* Pseudo Code:
/*
    1. First, let's clean up the strings with a helper function

    2. Replace spaces and punctuation with an empty string & cast to lower case
    * word.replace(/[^\w]/g, "").toLowerCase(); 

    3. And finally the words are turned into character maps in the helper function

    4. Inside our main function, use the helper fn on both strings

    5. First compare the number of keys (the number of individual letters) if these are not equal, we know right away that we don't have an anagram 

    6. If the letters match up, we must then check the counts with the Object.keys() function and a !== comparison, if the counts aren't the same, we don't have an anagram 

    7. If we get through all that - then we have an anagram! 

*/

// helper function to build a char map for us
// function buildCharMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);

//   // comparison
//   // if the length of the KEYS in each character map are not equal, then we know we do not have an anagram
//   if (Object.keys(charMapA) !== Object.keys(charMapB)) {
//     return;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       // if two keys do not point to the same value, no anagram!
//       return false;
//     }
//   }
//   // if we get all the way through those loops without a failing comparison - anagram!
//   return true;
// }

//! Second Round:
//* using 🌈array.prototype.sort()🌈

function cleanString(str) {
  return str.replace(/{^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(strA, strB) {
  return cleanString(strA) === cleanString(strB);
}

module.exports = anagrams;
