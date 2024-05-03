const chai = require('chai');
const expect = chai.expect;
const request = require('request');
const { server } = require('./api.js');


describe('Index Page', () => {

  it('should return the correct status code and message for GET /', (done) => {

    request('http://localhost:7865/', (error, response, body) => {
      if (error) {
        done(error);
      } else {
	expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      };
    });
  });

  it('shoult return content-type as text/plain for GET /', (done) => {
    request.get('http://localhost:7865/', (error, response) => {
      if (error) {
        return done(error);
      }

      expect(response.headers['content-type']).to.include('text/plain');

      done();
    })
  })

  after(() => {
    server.close();
  })
});
