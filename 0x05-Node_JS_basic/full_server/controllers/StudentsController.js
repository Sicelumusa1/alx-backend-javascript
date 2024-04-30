const { readDatabase } = require('../utils');
const path = require('path');

class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = path.resolve(precess.argv[2]);

    try {
      const studentsByField = await readDatabase(filePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');

      const sortedFields = Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      for (const field of sortedFields) {
        const students = studentsByField[field];
        const studentList = student.join(', ');
        re.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field]}\n`);
      }

      res.end()
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
  
  static async getAllStudentsByMajor(req, res) {
    const filePath = path.resolve(process.argv[2]);
    const {major} = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    
    try {
      const studentsByField = await readDatabase(filePath);

      if (!studentsByField[major]) {
        res.ststus(500).send();
	return;
      }

      const students = studentsByfield[major];
      res.status(200).send(`List: ${students.join(', ')}`)
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
