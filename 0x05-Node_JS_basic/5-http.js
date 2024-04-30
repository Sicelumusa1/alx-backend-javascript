// Import the required modules
const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const app = http.createServer(async (req, res) => {
  // get url path
  const urlPath = req.url;

  if (urlPath === '/') {
    // Root path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (urlPath === '/students') {
    // students path
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    // Get the database file name from command line args
    const args = process.argv.slice(2);
    if (args.length < 1) {
      res.end();
      return;
    }

    const filePath = path.resolve(__dirname, args[0]);

    try {
      // Read the CSV file asynchronously
      const data = await fs.readfile(filePath, 'utf-8');

      // Split into lines and filter remove empty line
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length === 0) {
        res.write('Cannot load the database');
        res.end();
        return;
      }

      // Extract headers from the first line
      const headers = lines[0].split(',');

      // Get the indx of firstname and field in the CSV headers
      const firstNameIndex = headers.indexOf('firstname');
      const fieldIndex = headers.indexOf('field');

      if (firstNameIndex === -1 || fieldIndex === -1) {
        res.write('Cannot load the database');
        res.end();
        return;
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
      res.write(`Number of students: ${totalStudents}`);

      for (const field in students) {
        res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(',')}`);
      }

      res.end();
    } catch (error) {
      res.write('Cannot load the database');
      res.end();
    }
  } else {
    // Other paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end();
  }
});

app.listen(1245);

module.exports = app;
