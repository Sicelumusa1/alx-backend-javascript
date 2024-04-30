// Bring in the file system and path modules
const fs = require('fs');

function countStudents(filePath) {
  try {
    // Read CSV file
    const data = fs.readFileSync(filePath, 'utf-8');

    // Split into lines and filter remove empty line
    const lines = data.split('\n').filter((line) => line.trim() !== '');

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
    for (let j = 1; j < lines.length; j += 1) {
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
    const totalStudents = Object.values(students).reduce((acc, val) => acc + val.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(',')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
