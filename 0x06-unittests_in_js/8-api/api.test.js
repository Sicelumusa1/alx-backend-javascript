const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const app = require('./api.js');

describe('Index Page', () => {
  before((done) => {
    app.listen(7865, done);
  });

  it('should return the correct status code and message for GET /', (done) => {
    chai
      .request(app)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.equal(200);
        expect(response.text).to.equal('Welcome to the payment system');
        done();
    });
  });
});
