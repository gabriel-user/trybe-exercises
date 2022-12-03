const router = require('express').Router();

const BooksController = require('../controllers/BooksController');

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.post('/', BooksController.create);
router.put('/:id', BooksController.update);

module.exports = router;