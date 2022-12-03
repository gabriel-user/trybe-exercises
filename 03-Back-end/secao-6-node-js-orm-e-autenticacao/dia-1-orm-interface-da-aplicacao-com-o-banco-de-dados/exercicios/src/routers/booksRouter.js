const router = require('express').Router();

const Books = require('../controllers/BooksController');

router.get('/', Books.getAll);

module.exports = router;