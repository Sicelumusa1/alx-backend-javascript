import Building from './5-building';
class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
	this._floors = floors;
    }

    // getter for floors
    get floors() {
        return this._floors;
    }

    // override evacuationWarningMessage
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}

export default SkyHighBuilding;
