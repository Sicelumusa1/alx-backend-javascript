const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('./api.js');

chai.use(chaiHttp);

describe('Index Page', () => {
  let server;
	
  before((done) => {
    server = app.listen(7865, done);
  });

  it('should return the correct status code and message for GET /', (done) => {
    chai
      .request(app)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status(200);
        expect(response.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  after((done) => {
    server.close(done);
  });
});
