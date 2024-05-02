const chai = require('chai');
const expect = chai.expect;
const sinon = requie('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with "SUM", 100, 20', () => {
    const spy = simon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    spy.restore();
  })
})
