const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const app = require('./api.js');


describe('Index Page', () => {
  let server;
	
  before((done) => {
    server = app.listen(7865, done);
  });

  after(() => {
    server.close();
  })

  it('should return the correct status code and message for GET /', (done) => {

    request('http://localhost:7865/', (error, response, body) => {
      if (error) {
        done(error);
      } else {
	expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
  });
});
