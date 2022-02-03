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

module.exports = {
  requireAllBooks,
  requireBooksById,
}