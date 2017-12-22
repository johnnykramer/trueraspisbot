/**
 * Users model
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trueraspisbot', { useMongoClient: true });
mongoose.Promise = global.Promise;

// schema
const usersSchema = mongoose.Schema({
  username: String,
  firstName: {
    type: String,
    default: ''
  },
  chatId: {
    type: Number,
    default: 0
  },
});

// methods
function insert(userData, cb) {
  const userObj = new Users(userData);
  userObj.save((err, user) => {
    if (err) {
      console.error(err);
      return cb(err);
    }
    return cb(user);
  });
}

function getAll(cb) {
  Users.find((err, users) => {
    if (err) {
      console.error(err);
      return cb(err);
    }
    return cb(users);
  });
}

function get(username) {
  return new Promise((resolve, reject) => {
    Users.findOne({ username: username }, (err, user) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      resolve(user);
    });
  });
}

// create model
const Users = mongoose.model('Users', usersSchema);

// exports
module.exports = {
  Users,
  usersMethods: {
    insert,
    getAll,
    get,
  }
};
