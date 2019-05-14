const dbConnection = require("./db_connection");
const runDbBuild = require('./db_build');
const getData = require('./queries/getData')



module.exports = {
    dbConnection,
    runDbBuild,
    getData
}