'use strict';
const Category = require('./categories-schema');
class Categories {

  constructor() {
  }

  // get(_id) {
  // }

  post(record) {
    var mongoCategories = new Category(record);
    return mongoCategories.save(); // include validation

  }

  // put(_id, record) {
  // }

  // delete(_id) {
  // }

}

module.exports = Categories;
