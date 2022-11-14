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
      console.log(response);

      const output = chocolatesMockFile.chocolates.length;

      expect(response.status).to.be.equal(200);
      expect(response.body.totalChocolates).to.be.equal(output);
    });
  });
});