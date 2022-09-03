'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('API Server', () => {

  it('/ works', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World');
  })

});
