import './0-get_list_students';

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const updatedGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: updatedGrade ? updatedGrade.grade : (student.grade !== undefined ? student.grade : 'N/A'),
      };
    });
}
