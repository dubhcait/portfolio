const fs = require('fs');

const dbConnection = require("./db_connection");

const sql = `
BEGIN;

DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project VARCHAR(100) NOT NULL,
    project_url VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    img_src VARCHAR(100) NOT NULL
);

INSERT INTO projects (project,  project_url, description, img_src )
VALUES
    ('', '', '', ''),
   ('', '', '', ''),
   ('', '', '', ''),
   ('', '', '', ''),
   ('', '', '', '');
COMMIT;
`;

const runDbBuild = () =>
  new Promise((resolve, reject) => {
    dbConnection.query(sql, (err, res) => {
      if (err) {console.log(err) 
        return reject(err);}
      console.log("database being built");
      resolve(true);
    });
  });

  runDbBuild();

module.exports = runDbBuild;