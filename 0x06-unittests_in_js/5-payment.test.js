const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const sendPaymentRequstToApi = require('./5-payment.js');

describe('sendPaymentRequstToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  })

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequstToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120').to.be.true;
    expect(consoleSpy.callCount).to.equal(1);
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequstToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20').to.be.true;
    expect(consoleSpy.callCount).to.equal(1);
  });
})
