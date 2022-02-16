const { Books } = require('../models');

const getAll = async () => {
  const result = await Books.findAllBooks();

  return result;
}

const getById = async (id) => {
  const result = await Books.findBookById(id);

  return result;
}

const createNewBook = async ({ title, author, pageQuantity }) => {
  const result = await Books.createNewBook({title, author, pageQuantity });

  return result;
}

const updateBook = async ({ id, title, author, pageQuantity }) => {
  const result = await Books.updateABook({ id, title, author, pageQuantity });

  return result;
}

const deleteBook = async ({id}) => {
  await Books.deleteABook({id});
}

module.exports = {
  getAll,
  getById,
  createNewBook,
  updateBook,
  deleteBook,
}