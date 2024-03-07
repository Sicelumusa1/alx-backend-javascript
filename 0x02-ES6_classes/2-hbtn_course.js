export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
	this._length = length;
	this._students = students;
    }

    // getter for length
    get length() {
        return this._length;
    }

    // setter for length
    set length(newLength) {
        if (typeof newLength === 'Number') {
	    this._length = newLength;
	} else {
	    throw new Error('length must be a number.');
	}
    }

    // getter for name
    get name() {
        return this._name;
    }

    // setter for name
    set name (newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            throw new Error('name must be a string.');
        }
    }

    // getter for name
    get students() {
        return this._students;
    }

    // setter for name
    set students (newStudents) {
        if (Array.isArray(newStudents)) {
            this._students = newStudents;
        } else {
            throw new Error('sttudents must be an array of strings.');
        }
    }
}
