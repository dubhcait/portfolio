const express = require("express");
const { check, validationResult } = require("express-validator");

const home = require("./home");
const projects = require("./project");
const projectsMobile = require("./project-mobile");
const contact = require("./contact");
const error = require("./error");
const result = require("./results");

const app = express();
const router = express.Router();

// GET
router.get("/", home.get);

// get MOREDATA route

router.get("/projects", projects.get);
router.get("/mobile", projectsMobile.get);
router.get("/contact-success", result.get);
router.get("/contact-failure", result.failure);

// POST route from contact form
// router.post('/contact', contact.post );

router.post("/contact", (req, res, next) => {
  check("name")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage("You should input your name"),
    check("email")
      .exists()
      .isEmail()
      .escape()
      .withMessage("Your should input a email");

  const errors = validationResult(req.body);

  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  } else {
    console.log("/contact");
    contact.post(req, res);
  }
});

router.get("*", error.client);
router.use(error.server);

module.exports = router;
