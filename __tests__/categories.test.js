
'use strict';
//const mongoose = require('mongoose');
//const server = require('./src/app.js');

const mongoConnect = require('../util/mongoose-connect');
const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb://localhost/401d3-people';

const Categories = require('../src/models/categories');
//const categories = require('../src/models/categories-schema');

const categories = new Categories();

describe('can post data', () => {
  beforeAll(() => {
    return mongoConnect(MONGODB_URI);
  });
  it('post new info to db', async () => {
    var result = await categories.post({
      name: 'Powel-Perelta',
      description: 'Best skateboard company ever',
    });
    console.log('*********', result);
    expect(result).toBeDefined();
    expect(result.name).toBe('Powel-Perelta');

  });
});
