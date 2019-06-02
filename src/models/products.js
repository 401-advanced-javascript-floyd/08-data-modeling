//instructions did not say test both so I tested categories
'use strict';
const Product = require('./product-schema');
class Products {

  constructor() {
  }

  getbyId(_id) {
    return Product.findById(_id, (err, item) => {
      return item.name;
    });

  }
  post(record) {
    var productCategories = new Product(record);
    return  productCategories.save(); // include validation

  }

  put(_id, record) {
    Product.updateOne(_id, record, () => {
    });
    return Product.findById(_id, (err, item) => {
      return item.name;
    });

  }
  delete(_id) {
    return Product.deleteOne(_id, (err, item) => {
      return item.deletedCount;
    });
  }


}

module.exports = Products;
