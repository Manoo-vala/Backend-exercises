'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => queryInterface.bulkInsert('Books', [
    {
      title: 'Hammering',
      author: 'Poppy T.Y.',
      pageQuantity: 402,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Mine ?',
      author: 'Lola Malina',
      pageQuantity: 373,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Miserable',
      author: 'Leoname Matlock',
      pageQuantity: 1268,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ]),

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, {});
  }
};
