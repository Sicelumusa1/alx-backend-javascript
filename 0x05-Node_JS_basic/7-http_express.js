const express = require('express');
const fs = require('fs').promises;
const path = require('path');

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    
    // Split into lines and filter remove empty line
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
       throw new Error('Cannot load the database');
    }

    // Extract headers from the first line
    const headers = lines[0].split(',');

    // Get the indx of firstname and field in the CSV headers
    const firstNameIndex = headers.indexOf('firstname');
    const fieldIndex = headers.indexOf('field');

    if (firstNameIndex === -1 || fieldIndex === -1) {
      throw new Error('Cannot load the database');
    }

    const students = {};

    // Parse the lines and get student info
    for (let j = 1; j < lines.length; j++) {
      const studentData = lines[j].split(',');
      if (studentData.length >= 4) {
        const firstName = studentData[firstNameIndex].trim();
        const field = studentData[fieldIndex].trim();

        if (firstName && field) {
          if (!students[field]) {
	    students[field] = [];
          }
          students[field].push(firstName);
        }
      }
    }
    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = express();

// Define the route for the root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton school!');
});

// Define the route for the /students endpoint
app.get('/students', async (req, res) => {
  const filePath = path.resolve(process.argv[2]);
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');

  try {
    const studentsByField = await readDatabase(filePath);
    const sortedFields = Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    

    for (const field of sortedFields) {
      const students = studentsByField[field];
      const studentList = student.join(', ');
      re.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field]}\n`);
    }

    res.end()
  } catch (error){
    res.write('Cannot load the database\n')
    res.end();
  }
});

app.listen(1245);

module.exports = app;
