const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const { expect, use } = chai;
use(chaiHttp);

const app = require('../../src/app');
const connection = require('../../src/db/connection');
const mockPeople = require('../mocks/mockPeople');

describe('Testando rotas da API de people', function () {
  afterEach(() => sinon.restore());
  
  describe('POST na rota /people', function () {
    it('Verifica se pessoa é cadastrada com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
      const response = await chai.request(app).post('/people').send({
        firstName: 'Luke',
        lastName: 'Skywalker',
        email: 'luke.skywalker@trybe.com',
        phone: '851 678 4453',
      });
  
      expect(response.status).to.equal(201);
      expect(response.body).to.deep.equal({ 
        message: 'Pessoa cadastrada com sucesso com o id 42',
      });
    });
  });

  describe('GET na rota /people', function () {
    it('Verifica se é listado todas pessoas', async function () {
      sinon.stub(connection, 'execute').resolves([mockPeople]);
      const response = await chai.request(app).get('/people');
  
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(mockPeople);
    });
  });

  describe('GET na rota /people/:id', function () {
    it('Verifica se lista pessoa com id 1', async function () {
      sinon.stub(connection, 'execute').resolves([[mockPeople[0]]]);
      const response = await chai.request(app).get('/people/1');
  
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(mockPeople[0]);
    });
  });

  describe('PUT na rota /people/:id', function () {
    it('Verifica se informações da pessoa com id 1 são alteradas', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
      const response = await chai.request(app).put('/people/1').send({
        firstName: 'Lucão',
        lastName: 'Andarilho dos céus',
        email: 'lucao.andarilho@trybe.com',
        phone: '851 678 4453',
      });
  
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ 
        message: 'Pessoa de id 1 atualizada com sucesso', 
      });
    });
  });

  describe('DELETE na rota /people/:id', function () {
    it('Verifica se pessoa com id 1 é excluida com sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
      const response = await chai.request(app).delete('/people/1');
  
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal({ 
        message: 'Pessoa de id 1 excluída com sucesso',
      });
    });
  });
});