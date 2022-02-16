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

const createNewBook = async ({ title, author, pageQuantity }) => {
  try {
    const newBook = await Book.create({title, author, pageQuantity});
    
    if (!title || !author || !pageQuantity) {
      const error = new Error();
      error.message = 'Corpo de requisição inválido.';
      throw error;
    };
    return newBook;
  } catch (err) {
    console.log(err);
    throw err;
  };
};

const updateExistingBook = async ({ id, title, author, pageQuantity }) => {
  try {
    const upBook = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );
    if (!upBook) {
      const erro = new Error();
      erro.message = 'Livro não existe!';
      throw erro;
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteABook = async (id) => {
  try {
    const toTrash = await Book.destroy(
      { where: { id }}
    );
    return toTrash;
  } catch (err) {
    console.log(err);
    throw err;
  }
};



module.exports = {
  handleAllBooks,
  handleBooksById,
  createNewBook,
  updateExistingBook,
  deleteABook,
}
