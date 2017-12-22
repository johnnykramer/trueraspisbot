/**
 * Weeks model
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trueraspisbot', { useMongoClient: true });
mongoose.Promise = global.Promise;

const weeksSchema = mongoose.Schema({
  week: { 
    pn: {
      type: Array
    },
    vt: {
      type: Array
    },
    sr: {
      type: Array
    },
    ch: {
      type: Array
    },
    pt: {
      type: Array
    },
    sb: {
      type: Array
    },
    vs: {
      type: Array
    }
  },
  weekNumber: Number,
  chatId: Number,
  Date: Date
});

const Weeks = mongoose.model('Weeks', weeksSchema);

// methods

module.exports = Weeks;