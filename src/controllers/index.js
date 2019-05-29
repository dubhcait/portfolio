const express = require('express');
// contact form


const home = require('./home');
const projects = require('./project');
const projectsMobile = require('./project-mobile');
const contact = require('./contact');
const error = require('./error');

const app = express();
const router = express.Router();


// GET
router.get ('/', home.get);

// get MOREDATA route

router.get ('/projects', projects.get);
router.get ('/mobile', projectsMobile.get);

// POST route from contact form
router.post('/contact', contact.post );

router.get ('*', error.client);
router.use(error.server);


module.exports = router;