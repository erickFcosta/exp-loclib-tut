/*var Book = require("../models/book");

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
};*/
var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
var async = require('async');


exports.index = function(req,res) {
  async.parallel({
    book_count: function (callback) {
      Book.countDocuments({}, callback);
    },
    book_instance_count: function (callback) {
      BookInstance.countDocuments({}, callback);
    },
    book_instance_available_count: function (callback) {
      BookInstance.countDocuments({status: 'Available'}, callback);
    },
    author_count: function (callback) {
      Author.countDocuments({}, callback);
    },
    genre_count: function (callback) {
      Genre.countDocuments({}, callback);
    }
  }, function (err, results) {
    res.render('index', { title: 'LOCAL LIBRARY HOME', error: err, data: results });
  });
}

exports.book_list = function (req, res, next) {
  Book.find({}, 'title author')
    .sort({title: 1})
    .populate('author')
    .exec(function (err, list_books) {
      if(err) {return next(err);}

      res.render('book_list', {title: 'Book List', book_list: list_books})
    });
};

exports.book_detail = function(req, res, next) {

    async.parallel({
        book: function(callback) {

            Book.findById(req.params.id)
              .populate('author')
              .populate('genre')
              .exec(callback);
        },
        book_instance: function(callback) {

          BookInstance.find({ 'book': req.params.id })
          .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.book==null) { // No results.
            var err = new Error('Book not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('book_detail', { title: results.book.title, book: results.book, book_instances: results.book_instance } );
    });

};
