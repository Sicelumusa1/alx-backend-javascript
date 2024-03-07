class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
	this._motor = motor;
	this._color = color;
    }

    //method to clone the car
    cloneCar() {
        const clonedCar = new Car(this._brand, this._motor, this._color);
	return clonedCar;
    }
}

export default Car;
