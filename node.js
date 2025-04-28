// Simple Node.js program to greet the user

// Use the readline module to get input from the user
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their name
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}! Nice to meet you.`);
  rl.close();
});

