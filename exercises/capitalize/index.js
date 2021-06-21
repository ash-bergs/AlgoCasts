// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//* Psuedo Code:
/*
    1. Create an array of words and punctuation 
    2. for every word, capitalize the first letter and make sure to grab the rest of the word (concatenate) 
    * using charAt() and .toUpperCase() methods
    3. return as a joined string
*/

function capitalize(str) {
  const words = str.split(' ');
  for (let word in words) {
    words[word] =
      words[word].charAt(0).toUpperCase() + words[word].substring(1);
  }
  return words.join(' ');
}

module.exports = capitalize;
