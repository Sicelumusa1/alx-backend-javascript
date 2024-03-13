//Sdudent interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//Two student objects
const student1: Student = {
    firstName: "Musa";
    lastName: "Gabuza";
    age: 30;
    location: Durban;
};

const student2: Student = {
    firstName: "Scelo";
    lastName: "Mnguni";
    age: 35;
    location: Durban;
};

//Create an array of students
const studentList: Student[] = [student1, student2];

//Rander the table
function renderTable() {
    const table = document.createElement("table");
    const tableBody = document.createElement("tbody");

    //Iterate and create a row
    studentList.forEach(student => {
        const row = tableBody.insertRow();
	const cell1 = row.insertCell(0);
	const cell2 = row.insertCell(1);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

//call renderTable function
renderTable();
