import getListStudents from "./0-get_list_students.js";
export default function getStudentIdsSum(students) {
    students.reduce((accumulator, current) => {
        return accumulator + current.id;
    }, 0);
}
