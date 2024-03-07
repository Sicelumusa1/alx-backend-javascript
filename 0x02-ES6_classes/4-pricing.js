import Currency from './3-currency';

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
	this._currency = currency;
    }

    // getter for amount
     get amount() {
        return this._amount;
    }

    // setter for amount
    set amount(newAmount) {
        if (typeof newAmount === 'number') {
            this._amount = newAmount;
        } else {
            throw new Error('amount must be a number.');
        }
    }

    // getter for currency
     get currency() {
        return this._currency;
    }

    // setter for currency
    set currency(newCurrency) {
        if (newCurrency instanceof Currency) {
            this._currency = newCurrency;
        } else {
            throw new Error('Currency must be an instance of Currency.');
        }
    }

    
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    //Static method to convert price
    static convertPrice(amount, conversionRate) {
        if (typeof amount === 'number' && typeof conversionRate === 'number') {
	    return amount * conversionRate;    
	} else {
	    throw new Error('amount and conversionRate must be numbers');
	}
    }
}
