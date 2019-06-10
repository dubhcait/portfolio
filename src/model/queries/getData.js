const dbConnection = require('../db_connection');

const getData = cb => {
    return new Promise((resolve, reject) => {


        dbConnection.query('SELECT * FROM projects', (err, res) => {
            if (err) reject (err);
            resolve(res.rows);
         })
        
        }); 
};

const getMoreData = cb => {
    return new Promise((resolve, reject) => {


        dbConnection.query('SELECT ROW_TO_JSON(ROW(id,project,  project_url,  project_github,  software)) from projects', (err, res) => {
           
            if (err) reject (err);
            resolve(res.rows);
         })
        
        }); 
}
module.exports = { getData, getMoreData }