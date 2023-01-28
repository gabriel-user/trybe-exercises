'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('genres',
    [
      { genre: 'Programação' },
      { genre: 'Auto Desenvolvimento' },
      { genre: 'Literatura e Ficção' },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
  await queryInterface.bulkDelete('genres', null, {});
  }
};
