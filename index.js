'use strict';

// require('dotenv').config();
// const mongoose = require('mongoose');

// const mongooseOptions = {
//   useNewUrlParser:true,
//   useCreateIndex: true,
// };
// // mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
// mongoose.connect(process.env.MONGODB_URI, mongooseOptions, function(error) {
//   // Check error in initial connection. There is no 2nd param to the callback.
//   console.log('mongoose has connected to database');
// });
// require('./src/app.js').start(process.env.PORT);
/////////////


const mongoose = require('mongoose');
const server = require('./src/app.js');

const mongoConnect = require('./util/mongoose-connect');
const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb://localhost/401d3-people';

mongoConnect(MONGODB_URI)
  .then((res) => {
    server.start(3000);
    console.log('Floyd the DB is connected!!')
  })
  .catch(console.error);