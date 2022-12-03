const router = require('express').Router();

const Books = require('../controllers/BooksController');

router.get('/', Books.getAll);
router.get('/:id', Books.getById);

module.exports = router;