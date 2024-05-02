const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const app = require('./api.js');

describe('Index Page' () => {
  before((done) => {
    app.listen(7865, done);
  });

  it('should return the correct status code and message for GET /', (done) => {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('should return 200 for valid cart ID', (done) => {
    request('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return 404 for valid cart ID', (done) => {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Invalid cart ID');
      done();
    });
  });
})
