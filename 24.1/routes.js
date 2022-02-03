const express = require('express');
const book = express.Router();
const {
    BookControllers: {
      requireAllBooks,
      requireBooksById,
      createNewBook,
      updateExistingBook,
      deleteBook,
    }} = require('./controllers')

// ToDos :
book.get('/', requireAllBooks);
// GET /books - lista todos os livros;

book.get('/:id', requireBooksById);
// GET /book/:id - pega o livro com o id especificado;

book.post('/', createNewBook);
// POST /book - cria um novo livro;

book.post('/:id', updateExistingBook);
// POST /book/:id - sobrescreve o livro com ID selecionado;

book.delete('/:id', deleteBook);
// DELETE /book/:id - deleta um livro;

module.exports = book;
