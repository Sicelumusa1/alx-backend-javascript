//Define the DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

//Define the TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

//Create the director class implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

//Create the Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
 
    getCoffeBreak(): string {
        return "Cannot have a break";
    }
    
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

//Create a function createEmployee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();	
    }
}

//Create a function isDirector
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

//Create a function executeWork
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTask();
    }
}

//Define the subject type
type Subjects = "Math" | "History";

//Define the teachClass function
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "teaching Math";
    } else if (todayClass === "History") {
        return "teaching History";	  
    } else {
        return "Invalid subject";
    }
}
