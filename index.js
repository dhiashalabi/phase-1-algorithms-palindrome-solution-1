function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  - split the word into an array
  - reverse the array
  - join the array into a string
  - compare the word to the reversed word
*/

/*
  Add written explanation of your solution here
  Start by splitting the word into an array. Then reverse the array. Then join the array into a string. Finally, compare the word to the reversed word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
