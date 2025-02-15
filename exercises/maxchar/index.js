// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//* Special Notes: The FOR-IN loop iterates through OBJECTS 
//* FOR-OF loops iterates through iterables - arrays, strings, etc 

function maxChar(str) {
    // create an object to assign string values to
    const charMap = {}; 
    // this variable will track the current char (in the charMap) with the highest count 
    let max = 0; 
    // this variable will hold the actual character responsible for the max count 👆
    let maxChar = ""; 

    // 1. Create the character map
    for (char of str) {
        charMap[char] = charMap[char] + 1 || 1; 
    }
    console.log(charMap); 
    // 2. Iterate through the character map, checking the keys and their values to find maxChar 
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]; 
            // charMap[char] will resolve in the number the key points to, the INTEGER VALUE  
            maxChar = char; 
            // char points to the KEYS of charMap, the STRING CHARACTER 
        }
    }

    // 3. Return maxChar, at the end of iteration the key with the highest value will prevail! ⚔ 
    return maxChar; 
}

module.exports = maxChar;
