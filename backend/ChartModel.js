const db = require('../db');

const getAnalyticsData = (callback) => {
  db.query('SELECT * FROM analytics', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { getAnalyticsData };