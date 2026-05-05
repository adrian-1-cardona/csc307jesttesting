// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

//just testing regular diviion here to work 
test('Testing div -- basic division', () => {
  expect(mut.div(10, 2)).toBe(5);
});

//divison by one should be the number 
test('Testing division by one', () => {
  expect(mut.div(42, 1)).toBe(42);
});

//test division by zero should return infinity
test('Testing division by zero', () => {
  expect(mut.div(10, 0)).toBe(Infinity);
});

//test div with a number as a string 
test('Testing div -- division with string divisor', () => {
  const result = mut.div(10, '2');
  expect(result).toBe(5);
});

//test div 
test('Testing div -- division with string dividend', () => {
  const result = mut.div('20', 4);
  expect(result).toBe(5);
});

//test string that has numbers
test('Testing containsNumbers -- string with numbers', () => {
  expect(mut.containsNumbers('hello123')).toBe(true);
});

// Test string without any numbers
test('Testing containsNumbers -- string without numbers', () => {
  expect(mut.containsNumbers('hello')).toBe(false);
});