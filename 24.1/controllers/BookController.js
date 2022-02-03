const BookServices = require('../services/BookServices');

const requireAllBooks = async (_req, res) => {
  const getBooks = await BookServices.handleAllBooks();

  res.status(200).json({getBooks});
}

const requireBooksById = async (req, res) => {
  // const getBooks = await
}

module.exports = {
  requireAllBooks,
}