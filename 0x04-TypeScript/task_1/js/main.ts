
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}
    
const teacher3: Teacher = {
    firstName: 'Peter',
    lastName: 'Bower',
    fullTimeEmployee: false,
    location: 'Durban',
    contract: false,
};
    
console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'Myan',
    lastName: 'Chetty',
    fullTimeEmployee: true,
    location: 'Durban',
    numberOfReports: 17;
};

console.log(director1);

//Define the interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName[0].toUpperCape();
    const fullName = `${firstInitial}. ${fullName}`;
    return fullName;
};

console.log(printTeacher('Myan', 'Doe'));

//Define the interface for the StudentClass constructor
interface StudentClassInterface {
    new (firstName: string, lastName: string): StudentClass;
}

//StudentClass
class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }

}
