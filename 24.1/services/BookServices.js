const { Book } = require('../models');

const handleAllBooks = async () => {
  try {
    const books = await Book.findAll();

    return books;
  } catch (err) {
    console.log(err);

    throw err;
  }
}

const handleBooksById = async (id) => {
  const books = await Book.FindByPk(id);

  if(!books) {
    const err = new Error();
    err.message = 'Request Error: ' + err;
    throw err;
  }

  return books;
};

module.exports = {
  handleAllBooks,
  handleBooksById,
}
