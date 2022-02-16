const { getAll, getById, createNewBook, updateBook, deleteBook } = require('../services/Books');

const getAllBooks = async (req, res) => {
  const result = await getAll();

  res.status(200).json(result);
}

const getBookById = async (req, res) => {
  const { id } = req.params;
  const result = await getById(id);

  res.status(200).json(result)
}

const createABook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const result = await createNewBook({ title, author, pageQuantity });


  res.status(201).json({ id: result.insertedId,title, author, pageQuantity });
}

const updateABook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;

  const result = await updateBook({ id, title, author, pageQuantity });

  res.status(201).json({ id, title, author, pageQuantity });
}

const deleteABook = async (req, res) => {
  const { id } = req.params;

  await deleteBook({ id });

  res.status(200).json({ message: `Book deleted from our store.` });
}

module.exports = {
  getAllBooks,
  getBookById,
  createABook,
  updateABook,
  deleteABook,
}
