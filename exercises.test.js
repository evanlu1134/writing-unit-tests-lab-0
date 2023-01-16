const exercises = require('./exercises');


test('Question 1: isRealPalindrome', () => {
  expect(exercises.isRealPalindrome('madam')).toBe(true);
  expect(exercises.isRealPalindrome('Madam')).toBe(true);
  expect(exercises.isRealPalindrome("Madam, I'm Adam")).toBe(true);
  expect(exercises.isRealPalindrome('356653')).toBe(true);
  expect(exercises.isRealPalindrome('123ab321')).toBe(false);
});

