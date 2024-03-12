import './0-get_list_students';

export default function getListStudentIds(students) {
  // check if students is an array
  if (!Array.isArray(students)) {
    return [];
  }

  const studentId = students.map((student) => student.id);
  return studentId;
}
