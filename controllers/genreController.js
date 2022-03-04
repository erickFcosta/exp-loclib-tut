var Genre = require( "../models/genre" );

// genre_list
exports.genre_list = function (req, res) {
  res.send('NOT IMPLEMENTED: genre list')
}

// genre_detail + (req.params.id)
exports.genre_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: genre detail' + req.params.id)
}

// genre_create (get and post)
exports.genre_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: genre create GET')
}
exports.genre_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: genre create POST')
}

// genre_delete (get and post)
exports.genre_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: genre delete GET')
}
exports.genre_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: genre delete POST')
}

// genre_update (get and post)
exports.genre_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: genre update GET')
}
exports.genre_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: genre update POST')
}
