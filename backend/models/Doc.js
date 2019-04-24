const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DocSchema = new Schema({
  text: {
    type: String,
    required: true,
    default: 'Hello world!'
  },
  title: {
    type: String,
    required: true,
    default: 'Untitled'
  }
}, {
  collection: 'docs',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Doc', DocSchema);