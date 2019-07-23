
exports.get = (req, res) => {
    res
      .status(200)
      .render('contact-success')
  };
  


exports.failure = (req, res) => {
    res
      .status(200)
      .render('contact-failure')
  };
  