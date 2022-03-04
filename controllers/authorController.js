var Author = require('../models/author');

// display list of all Authors
exports.author_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Author list');
};

// author_detail + (req.params.id)
exports.author_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: author detail' + req.params.id);
};

// author_create (get and post)
exports.author_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: author create GET');
};
exports.author_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: author create POST');
};

// author_delete (get and post)
exports.author_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: author delete GET');
};
exports.author_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: author delete POST');
};

// author_update (get and post)
exports.author_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: author update GET');
};
exports.author_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: author update POST');
};
