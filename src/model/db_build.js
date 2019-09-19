const fs = require('fs');

const dbConnection = require("./db_connection");

const sql = `
BEGIN;

DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    project VARCHAR(100) NOT NULL,
    software TEXT NOT NULL,
    project_url VARCHAR(200) NOT NULL,
    project_github VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    img_src VARCHAR(200) NOT NULL,
    team_project VARCHAR(20) NOT NULL
);

INSERT INTO projects (project, software, project_github, project_url, description, img_src, team_project )
VALUES
    ('Smoothiebar', 'Postgres, Express', 'https://github.com/dubhcait/Smoothie-bar', 'https://smoothiebar.herokuapp.com/','A FAC week 8 project build over a day and a half, by a team of 4. ', 'https://i.imgur.com/xbUjZ5a.png' , 'yes'),
   ('Dish', 'Postgres, Express, handlebars', 'https://github.com/FAC-Sixteen/dish','https://community-dish.herokuapp.com/',  'A food sharing app to bring people together and reduce food wastage.A FAC student project build.', 'https://i.imgur.com/wjKlKEd.png', 'yes'),
   ('The-Long-Grass', 'React',  'https://github.com/FAC-Sixteen/RK-The-Long-Grass', 'https://the-long-grass.netlify.com/', 'Ready for a Poké Adventure? The long grass is waiting. This is a pokémon where you capture pokemon by clicking.', 'https://i.imgur.com/shsS0Pg.png' , 'yes'),
   ('Nova App', 'MongoDB, Express', 'https://github.com/dubhcait/Nova-Foundation', 'https://nova-foundation-app.herokuapp.com/', 'Nova aims to help families that have experienced baby loss at any stage','https://i.imgur.com/ZrLbO7m.png', 'yes'),
  ('LSX App', 'Airtable, React', 'https://github.com/dubhcait/LSx', 'https://fac16-lsx-action-planner.herokuapp.com/', 'A mobile-based app to help users create an action plan, to organise and facilitate change.','https://i.imgur.com/1Z4ayCE.png', 'yes');



 
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