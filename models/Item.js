var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Item = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  date: {
    type: String
  },
  content: {
    type: String
  },
  comment: {
    type: []
  }

  
},{
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);