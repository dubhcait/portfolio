
exports.client = (req, res) => {
  res
    .status(404)
    .render('404')
};

exports.server = (err, req, res, next) => {
  res
    .status(500)
    .render('500');
};

