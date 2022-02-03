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

  try {
    const books = await Book.findByPk(id);
  
    if(!books) {
      const err = new Error();
      err.message = 'Request Error';
      throw err;
    }

    return books;
  } catch(err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  handleAllBooks,
  handleBooksById,
}
