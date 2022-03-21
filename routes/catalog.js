var express = require( "express" );
var router = express.Router();

// require controllers modules
let bookCtrl = require('../controllers/bookController');
let authorCtrl = require('../controllers/authorController');
let bookInsCtrl = require('../controllers/bookinstanceController');
let genreCtrl = require("../controllers/genreController");

// book main routers
router.get('/', bookCtrl.index);
router.get('/book', bookCtrl.book_list);
router.get('/book/:id', bookCtrl.book_detail);
// get and post book
/*router.get('/book/create', bookCtrl.book_create_get);
router.post('/book/create', bookCtrl.book_create_post);

router.get('/book/:id/update/', bookCtrl.book_update_get);
router.post('/book/:id/update/', bookCtrl.book_update_post);

router.get('/book/:id/delete/', bookCtrl.book_delete_get);
router.post('/book/:id/delete/', bookCtrl.book_delete_post);*/

// author main routers
router.get('/authors', authorCtrl.author_list);
router.get('/author/:id', authorCtrl.author_detail);
// get and post author
router.get('/author/create', authorCtrl.author_create_get);
router.post('/author/create', authorCtrl.author_create_post);

/*router.get('/author/:id/update', authorCtrl.author_update_get);
router.post('/author/:id/update', authorCtrl.author_update_post);

router.get('/author/:id/delete', authorCtrl.author_delete_get);
router.post('/author/:id/delete', authorCtrl.author_delete_post);*/

// book instance main routers
router.get('/bookinstance', bookInsCtrl.bookinstance_list);
router.post('/bookinstance/:id', bookInsCtrl.bookinstance_detail);
// get and post book instance
/*router.get('/bookinstance/:id/create', bookInsCtrl.bookinstance_create_get);
router.post('/bookinstance/:id/create', bookInsCtrl.bookinstance_create_post);

router.get('/bookinstance/:id/update', bookInsCtrl.bookinstance_update_get);
router.post('/bookinstance/:id/update', bookInsCtrl.bookinstance_update_post);

router.get('/bookinstance/:id/delete', bookInsCtrl.bookinstance_delete_get);
router.post('/bookinstance/:id/delete', bookInsCtrl.bookinstance_delete_post);
*/

// genre main routers
router.get('/genre', genreCtrl.genre_list);
//TODO: rota detalhes de genero precisa ser revista
router.post('/genre/:id', genreCtrl.genre_detail);
// get and post genre
router.get('/genre/create', genreCtrl.genre_create_get);
router.post('/genre/create', genreCtrl.genre_create_post);
/*router.get('/genre/:id/update', genreCtrl.genre_update_get);
router.post('/genre/:id/update', genreCtrl.genre_update_post);

router.get('/genre/:id/delete', genreCtrl.genre_delete_get);
router.post('/genre/:id/delete', genreCtrl.genre_delete_post);*/

// module exports
module.exports = router;
