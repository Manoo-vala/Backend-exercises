module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    timestamps: true,
  });
  Books.findAllBooks = () => 
    Books.findAll().then((products) => 
      products.map((product) =>  product.dataValues)
    );

  Books.findBookById = (id) =>
    Books.findByPk(id).then((product) => product.dataValues);

  Books.createNewBook = ({title, author, pageQuantity}) =>
    Books.create({title, author, pageQuantity}).then((products) => products.dataValues)

  Books.updateABook = ({id, title, author, pageQuantity}) =>
    Books.update(
      { title, author, pageQuantity },
      { where: { id } },
      ).then((response) => response.dataValues);

  Books.deleteABook = ({ id }) => 
    Books.destroy(
      { where: { id } },
    );

  return Books;
}