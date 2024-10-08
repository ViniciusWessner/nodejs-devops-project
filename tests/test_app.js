
const request = require('supertest');
const app = require('../src/app/index.js');

describe('GET /', () => {
  it('Aguardando Olá Devops', (done) => {
    request(app).get('/').expect('Ola, devops', done);
  });
});
