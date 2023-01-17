// Question 1
const isRealPalindrome = (str) => {
  const regex = /[^A-Z09]/gi
  const newStr = str.toLowerCase().replace(regex, "")
  const reverseNewStr = newStr.split("").reverse().join("")
  return newStr === reverseNewStr
};

// Question 2
const runningTotal = (arr) => {
  let sum = 0
  return arr.map(vals => sum += vals)
};

// Question 3
const swap = (str) => {
  const newArr = str.split(" ")
  return newArr.map(word => (word.length !== 1 ? word[word.length - 1] + word.slice(1, word.length - 1) + word[0] : word)).join(" ")
};

// Question 4
const wordSizes = (str) => {
  const obj = {}
  str.split(" ").forEach(word => !obj[word.length] ? obj[word.length] = 1 : obj[word.length] += 1)
  return obj
};

// Question 5
const union = (arr1,arr2) => {
  return [...new Set(arr1.concat(arr2))]
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
const sequence = (n) => {
  let count = 0
  let filledArray = [...new Array(n)].map(() => count+=1);
  return filledArray
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
