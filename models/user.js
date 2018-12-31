var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserCchema = mongoose.Schema({
  name: {
    type: String
  },
  username: {
    type: String,
    index: true
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
});

var User = module.exports = mongoose.model('user', UserCchema);

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}