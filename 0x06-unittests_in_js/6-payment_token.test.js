const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-pyment_toke.js');

describe('getPaymentTokenFromAPI',() => {

  it('should retun aresolved promise with the correct data when success is true', (done) => {
    const promise = getPaymentTokenFromAPI(true);

    promise
      .then((result) => {
        expect(result).to.be.an('object');
	expect(result.data).to.equal('Successful response from the API');
	done();
      })
      .catch((err) => {
        done(err);
      })
  })
})
