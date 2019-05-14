const dbConnection = require('../db_connection');

const getData = cb => {
    return new Promise((resolve, reject) => {


        dbConnection.query('SELECT * FROM projects', (err, res) => {
            if (err) reject (err);
            resolve(res.rows);
         })
        
        }); 
};

module.exports = { getData }