import getListStudents from "./0-get_list_students.js";
export default function getListStudentIds(students) {

    //check if students is an array
    if (!Array.isArray(students)) {
        throw new Error("Students must be an array");
    }
    
    const studentId = students.map(student => student.id);
    return studentId;
}
