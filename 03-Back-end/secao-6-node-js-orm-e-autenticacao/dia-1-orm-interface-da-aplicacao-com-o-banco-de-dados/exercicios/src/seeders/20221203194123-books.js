'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', 
    [{
        title: 'A Culpa não é minha',
        author: 'Sonara Maria',
        pageQuantity: 190,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Aquele Trem Tudo',
        author: 'Vanderci',
        pageQuantity: 150,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Fiquei sabendo algo que não sabia',
        author: 'Sidney Victor',
        pageQuantity: 260,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Planilha de Sucesso',
        author: 'Gustavo Henrique',
        pageQuantity: 140,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Vou te explicar como funciona',
        author: 'Gabriel Vinícius',
        pageQuantity: 400,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Não entendi nada',
        author: 'Larissa Grabriele',
        pageQuantity: 120,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }], 
    {});
  },

  async down (queryInterface, _Sequelize) {
   await queryInterface.bulkDelete('Books', null, {});
  }
};
