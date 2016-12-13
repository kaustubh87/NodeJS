var express = require('express');
var router = express.Router();
var genres = require('../controllers/genres');
var books = require('../controllers/books');

router.get('/genres', genres.getAllGenres);
router.get('/books', books.getAllBooks);
router.get('/book/:id', books.getBookById);
router.post('/add/genre', genres.addGenre);
router.post('/add/book', books.addBook);
router.put('/genre/:id', genres.updateGenre);
router.put('/update/book/:id', books.updateBook);
router.delete('/delete/genre/:id', genres.deleteGenre);
router.delete('/delete/book/:id', books.deleteBook);
module.exports = router;