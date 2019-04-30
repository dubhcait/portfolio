const dbConnection = require('../db_connection');

const getData = cb => {
    dbConnection.query('SELECT * FROM actions', (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
    });
};

module.exports = { getData }