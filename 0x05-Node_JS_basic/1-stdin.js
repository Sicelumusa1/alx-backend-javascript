// Executed through command line:
const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

// Displays the message Welcome to Holberton School, what is your name?
console.log('Welcome to Holberton School, what is your name?');

// The user input their name on a new line
read.question('', (answer) => {
  // Displays Your name is: INPUT
  console.log(`Your name is: ${answer}`);
  read.close();
});

// When the user ends the program, it displays
// This important software is now closing
read.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
