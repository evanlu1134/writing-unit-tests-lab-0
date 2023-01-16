const exercises = require('./exercises');


test('Question 1: isRealPalindrome', () => {
  expect(exercises.isRealPalindrome('madam')).toBe(true);
  expect(exercises.isRealPalindrome('Madam')).toBe(true);
  expect(exercises.isRealPalindrome("Madam, I'm Adam")).toBe(true);
  expect(exercises.isRealPalindrome('356653')).toBe(true);
  expect(exercises.isRealPalindrome('123ab321')).toBe(false);
});

test('Question 2: runningTotal', () => {
expect(exercises.runningTotal([2, 5, 13])).toEqual([2,7,20]);           
expect(exercises.runningTotal([14, 11, 7, 15, 20])).toEqual([14, 25, 32, 47, 67]);
expect(exercises.runningTotal([3])).toEqual([3]);                   
expect(exercises.runningTotal([])).toEqual([]);                    
});