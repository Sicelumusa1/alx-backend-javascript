const chai = require('chai');
const expect = chai.expect;
const sinon = requie('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with "SUM", 100, 20 and stub to return 10', () => {
    const spy = sinon.spy(console, 'log');
    const stup = sinon.stub(Utils, 'calculateNumber').return(10);

    sendPaymentRequestToApi(100, 20);
    
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.colledOnceWithExactly('The total is: 10')).to.be.true;

    stub.restore();
    spy.restore();
  })
})
