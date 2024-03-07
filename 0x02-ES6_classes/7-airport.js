class Airport {
    constructor(name, code) {
        this._name = name;
	this._code = code;
    }

    // Default string description returns the airport code
    toString() {
        return `[${this._code}]`;
    }
}

export default Airport;
