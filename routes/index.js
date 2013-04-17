// index.js
// GET homepage

exports.index = function ( req, res ) {
  res.render('index.html');
};

exports.getall = function ( req, res ) {
  res.render('get_all.html');
};

exports.getname = function ( req, res ) {
  res.render('get_name.html');
};
