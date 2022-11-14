const chai = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const chaiHttp = require('chai-http');

const app = require('../../src/app');
const chocolatesMockFileJson = require('../mocks/chocolatesMockFile');
const chocolatesMockFile = JSON.parse(chocolatesMockFileJson);

const { expect } = chai;
chai.use(chaiHttp);

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(chocolatesMockFileJson);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates', async function () {
      const output = chocolatesMockFile.chocolates;
      const response = await chai.request(app).get('/chocolates');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai.request(app).get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: 'Mounds',
        brandId: 3,
      });
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai.request(app).get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar o brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai.request(app).get('/chocolates/brand/1');
      
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: "Mint Intense",
          brandId: 1
        },
        {
          id: 2,
          name: "White Coconut",
          brandId: 1
        }
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total para buscar o total de chocolates', function () {
    it('Retorna a quantidade total de chocolates, que é 4', async function () {
      const response = await chai.request(app).get('/chocolates/total');
      const output = chocolatesMockFile.chocolates.length;

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: output});
    });
  });

  describe('Usando o método GET em /chocolates/search para retornar os chocolates que contém o termo pesquisado', function () {
    it('Retorna chocolates que contenham "Mo" no nome', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search')
        .query({name: 'Mo'});
      
      const output = chocolatesMockFile.chocolates.filter(
        ({ name }) => name.includes("Mo")
      );

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(output);
    });

    it('Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search')
        .query({name: 'lalaland'});
      
      const output = { 
        message: "Não foi encontrando nenhum chocolate com o termo pesquisado"
      }

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal(output);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza chocolate com id 1', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/1')
        .send({ name: "Mint Pretty Good", brandId: 2 });
      
      const output = { 
        id: 1,
        name: "Mint Pretty Good",
        brandId: 2
      };

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(output);
    });

    it('Retornar uma mensagem de erro quando não há um chocolate com a id passada.', async function () {
      const response = await chai
        .request(app)
        .put('/chocolates/200')
        .send({ name: "Mint Pretty Good", brandId: 2 });
      
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ 
        message: "chocolate not found"
      });
    });
  });
});