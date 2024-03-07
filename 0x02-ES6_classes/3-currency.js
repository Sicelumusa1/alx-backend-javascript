export default class Currency {
    constructor(code, name) {
        this._code = code;
	this._name = name;
    }

    // getter for code
    get code() {
        return this._code;
    }

    // setter for code
    set code(newCode) {
        if (typeof newCode === 'string') {
            this._code = newCode;
        } else {
            throw new Error('code must be a string.');
        }
    }

    // getter for name
    get name() {
        return this._name;
    }

    // setter for name
    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            throw new Error('name must be a string.');
        }
    }

    //method to display full currency
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
