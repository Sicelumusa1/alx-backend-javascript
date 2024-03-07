export default class Building {
    constructor(sqft) {
        this._sqft = sqft;
    }

    //getter for sqft
    get sqft() {
        return this._sqft;
    }

    //Method to generate an evacuation warning message
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}
