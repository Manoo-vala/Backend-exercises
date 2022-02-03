const BookServices = require('../services/BookServices');

const requireAllBooks = async (_req, res) => {
  const getBooks = await BookServices.handleAllBooks();

  res.status(200).json(getBooks);
}

const requireBooksById = async (req, res) => {
  const { id } = req.params;
  const getBooks = await BookServices.handleBooksById(id);

  res.status(200).json(getBooks);
}

const createNewBook = async (req, res) => {
  const createBook = await BookServices.createNewBook(req.body);

  res.status(201).json(createBook);
}

const updateExistingBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const upBook = await BookServices.updateExistingBook({id , title, author, pageQuantity});

  res.status(201).json({ message: 'Livro atualizado.'});
}

const deleteBook = async (req, res) => {
  const deleteThisBook = await BookServices.deleteABook(req.params.id);

  res.status(204).json({message: 'Apagado, adios!'});
}

module.exports = {
  requireAllBooks,
  requireBooksById,
  createNewBook,
  updateExistingBook,
  deleteBook,
}