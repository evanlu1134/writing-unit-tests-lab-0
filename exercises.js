// Question 1
const isRealPalindrome = (str) => {
const regex = /[^A-Z09]/gi
const newStr = str.toLowerCase().replace(regex,"")
const reverseNewStr = newStr.split("").reverse().join("")
return newStr === reverseNewStr
};

// Question 2
const runningTotal = () => {

};

// Question 3
const swap = () => {

};

// Question 4
const wordSizes = () => {

};

// Question 5
const union = () => {

};

// Question 6
const firstRecurring = () => {

};

// Question 7
const showMultiplicativeAverage = () => {

};

// Quetsion 8
const multiplyList = () => {
};

// Question 9
const sequence = () => {

};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
