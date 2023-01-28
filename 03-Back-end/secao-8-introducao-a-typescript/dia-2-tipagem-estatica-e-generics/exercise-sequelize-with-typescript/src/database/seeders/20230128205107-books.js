'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('books',
    [
      { 
        title: 'Código limpo: Habilidades práticas do Agile Software',
        author_id: 4,
        genre_id: 1,
      },
      { 
        title: 'Harry Potter e as Relíquias da Morte: 7',
        author_id: 6,
        genre_id: 3,
      },
      { 
        title: 'Box Trilogia O Senhor dos Anéis',
        author_id: 7,
        genre_id: 3,
      },
      { 
        title: '12 regras para a vida: um antídoto para o caos',
        author_id: 5,
        genre_id: 2,
      },
      { 
        title: 'O poder do subconsciente',
        author_id: 3,
        genre_id: 2,
      },
      { 
        title: 'Mais esperto que o Diabo: O mistério revelado da liberdade e do sucesso',
        author_id: 2,
        genre_id: 2,
      },
      { 
        title: 'Como Fazer Amigos e Influenciar Pessoas',
        author_id: 1,
        genre_id: 2,
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
  await queryInterface.bulkDelete('books', null, {});
  }
};
