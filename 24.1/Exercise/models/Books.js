module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createAt: DataTypes.DATE,
  });
  return Book
}