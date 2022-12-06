'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Books', 'publisher', {
      allowNull: false,
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.removeColumn('Books', 'pulisher');
  }
};
