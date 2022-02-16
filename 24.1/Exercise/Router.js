const booksRouter = require('express').Router();
const { getAllBooks, getBookById, createABook, updateABook, deleteABook } = require('./controllers/Books');
const rescue = require('express-rescue');

booksRouter.get('/', rescue(getAllBooks));

booksRouter.get('/:id', rescue(getBookById));

booksRouter.post('/', rescue(createABook));

booksRouter.put('/:id', rescue(updateABook));

booksRouter.delete('/:id', rescue(deleteABook));

module.exports = booksRouter;
