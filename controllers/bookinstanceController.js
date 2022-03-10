var BookInstance = require( "../models/bookinstance" );

// bookinstance_list
/*exports.bookinstance_list = function (req, res) {
  res.send('NOT IMPLEMENTED: bookinstance list')
}

// bookinstance_detail + (req.params.id)
exports.bookinstance_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: bookinstance detail' + req.params.id)
}

// bookinstance_create (get and post)
exports.bookinstance_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: bookinstance create GET')
}
exports.bookinstance_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: bookinstance create POST')
}

// bookinstance_delete (get and post)
exports.bookinstance_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: bookinstance delete GET')
}
exports.bookinstance_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: bookinstance delete POST')
}

// bookinstance_update (get and post)
exports.bookinstance_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: bookinstance update GET')
}
exports.bookinstance_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: bookinstance update POST')
}*/

exports.bookinstance_list = function(req, res, next) {

  BookInstance.find()
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err)};
      // Successful, so render
      res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });
};
