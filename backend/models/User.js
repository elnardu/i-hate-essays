const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    index: true
  },
  github_id: {
    type: String,
    required: true,
    index: true
  },
  documents: [{
    type: Schema.Types.ObjectId,
    ref: 'Doc'
  }]
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);
