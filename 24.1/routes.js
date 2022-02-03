const express = require('express');
const book = express.Router();
const { BookControllers } = require('./controllers')

// ToDos :
book.get('/', BookControllers.requireAllBooks);
// GET /books - lista todos os livros;

book.get('/:id');
// GET /book/:id - pega o livro com o id especificado;

// book.post();
// POST /book - cria um novo livro;

// book.post();
// POST /book/:id - sobrescreve o livro com ID selecionado;

// book.delete();
// DELETE /book/:id - deleta um livro;

module.exports = book;
