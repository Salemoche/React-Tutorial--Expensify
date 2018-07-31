const add = (a, b) => a + b;

const generateGreating = (name) => `Hello ${name}!`

test('should add two numbers', () => {
  const result = add(1, 3);

  expect(result).toBe(4);

});

test('Should return Greeting', () => {
  const result  = generateGreating('Hans');

  expect(result).toBe('Hello Hans!');
});
