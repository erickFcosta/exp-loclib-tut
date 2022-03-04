var Book = require("../models/book");

// book_index
exports.index = function (req, res) {
  res.send('NOT IMPLEMENTED: site homePage')
};

// book_list
exports.book_list = function (req, res) {
  res.send('NOT IMPLEMENTED: book list')
};

// book_detail + (req.params.id)
exports.book_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: book details' + req.params.id)
};

// book_create (get and post)
exports.book_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: book create GET')
};
exports.book_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: book create POST')
};

// book_delete (get and post)
exports.book_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: book delete GET')
};
exports.book_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: book delete POST')
};

// book_update (get and post)
exports.book_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: book update GET')
};
exports.book_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: book update POST')
};
