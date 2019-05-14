const fs = require('fs');

const dbConnection = require("./db_connection");

const sql = `
BEGIN;

DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project VARCHAR(100) NOT NULL,
    project_url VARCHAR(200) NOT NULL,
    project_github VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    img_src VARCHAR(200) NOT NULL,
    team_project VARCHAR(20) NOT NULL
);

INSERT INTO projects (project,  project_url,  project_github, description, img_src, team_project )
VALUES
    ('Javascript Calculator', 'https://dubhcait.github.io/jsCalc/', 'https://github.com/dubhcait/jsCalc', 'This is a Javascript Calculator. It has javascript functionality built on a HTML and CSS base.', 'https://i.imgur.com/orkva5t.png' , 'no'),
   ('Pokesign', 'https://fac-sixteen.github.io/week3-team-pokedex/', 'https://github.com/dubhcait/week3-team-pokedex', 'Our task was to create a single page website that accessed the pokeApi and a horoscope api, and used them to render information on the page utilising the DOM.', 'tbc', 'yes'),
   ('Dice roll', 'https://github.com/dubhcait/dice', 'https://dubhcait.github.io/dice/', 'Roll the 6 dice and get random results. The inspiration for this was taken from a morning workshop in FAC.', 'tbc' , 'no'),
   ('Rosmarinus', 'https://github.com/dubhcait/week4-team-pokedex', 'https://rosmarinus.herokuapp.com/', 'Rosmarin is a website/widget that enables users to quickly find and select words from a list of suggestions, as they type. The list is dynamically generated from a pre-populated list of values of plant names','tbc', 'yes'),
  ('NewsRUs', 'https://github.com/dubhcait/Week5-purple-sloths', 'https://dubhcait.github.io/3droll/.', 'NewsRUs is a website that enables users to quickly search the guardian website and return a filtered list of Guardian news articles.','tbc', 'yes');



 
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