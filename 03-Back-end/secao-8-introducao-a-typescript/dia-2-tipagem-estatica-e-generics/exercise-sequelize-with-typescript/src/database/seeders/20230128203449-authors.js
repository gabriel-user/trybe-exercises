'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('authors',
    [
      { name: 'Dale Carnegie' },
      { name: 'Napoleon Hill' },
      { name: 'Joseph Murphy' },
      { name: 'Robert Cecil Martin' },
      { name: 'Jordan Peterson' },
      { name: 'Lia Wyler' },
      { name: 'J.R.R. Tolkien' },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
  await queryInterface.bulkDelete('authors', null, {});
  }
};
