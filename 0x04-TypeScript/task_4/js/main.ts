import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';


export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// Create and export a Teacher object
export const cTeacher: Teacher = {
    firstName: "John",
    lastName: "Due",
    experienceTeachingC: 10
};

// For Cpp subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("\nJava");
cpp.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("\nReact");
cpp.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
