const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const fs = require("fs");
const { app } = require("../../src/app");

chai.use(chaiHttp);

const output = [
  { id: 1, name: "Mint Intense", brandId: 1 },
  { id: 2, name: "White Coconut", brandId: 1 },
  { id: 3, name: "Mon Chéri", brandId: 2 },
  { id: 4, name: "Mounds", brandId: 3 },
];

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: "Lindt & Sprungli",
    },
    {
      id: 2,
      name: "Ferrero",
    },
    {
      id: 3,
      name: "Ghirardelli",
    },
  ],
  chocolates: [
    {
      id: 1,
      name: "Mint Intense",
      brandId: 1,
    },
    {
      id: 2,
      name: "White Coconut",
      brandId: 1,
    },
    {
      id: 3,
      name: "Mon Chéri",
      brandId: 2,
    },
    {
      id: 4,
      name: "Mounds",
      brandId: 3,
    },
  ],
});

const { expect } = chai;

describe("Testando a API", function () {
  beforeEach(() => {
    sinon.stub(fs, "readFile").resolves(mockFile);
    sinon.stub(fs, "writeFile").resolves();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe("Usando o método GET em /chocolates", function () {
    it("Retorna a lista completa de chocolates", async function () {
      const response = await chai.request(app).get("/chocolates");

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe("Usando o método GET em /chocolates/:id", function () {
    it("Retorna o chocolate com o id 4", async function () {
      const response = await chai.request(app).get("/chocolates/4");

      expect(response).to.have.status(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: "Mounds",
        brandId: 3,
      });
    });
    it("Retorna o status 404 ao colocar um id inválido", async function () {
      const response = await chai.request(app).get("/chocolates/100");

      expect(response).to.have.status(404);
      expect(response.body).to.deep.equal({ message: "Chocolate not found" });
    });
  });

  describe("Usando o método GET em /chocolates/brands/:id", function () {
    it("Retorna os chocolates da marca com id 1", async function () {
      const response = await chai.request(app).get("/chocolates/brands/1");

      expect(response).to.have.status(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: "Mint Intense",
          brandId: 1,
        },
        {
          id: 2,
          name: "White Coconut",
          brandId: 1,
        },
      ]);
    });
  });

  describe("Usando o método GET em /chocolates/total", function () {
    it("Retorna a quantidade de chocolates na base de dados", async function () {
      const response = await chai.request(app).get("/chocolates/total");

      expect(response).to.have.status(200);
      expect(response.body).to.deep.equal({ total: 4 });
    });
  });

  describe("Usando o método GET em /chocolates/search", function () {
    it("Retorna os chocolates que tenham Mo em seu nome", async function () {
      const response = await chai
        .request(app)
        .get("/chocolates/search?name=Mo");
      const expectedResponse = [
        {
          id: 3,
          name: "Mon Chéri",
          brandId: 2,
        },
        {
          id: 4,
          name: "Mounds",
          brandId: 3,
        },
      ];

      expect(response).to.have.status(200);
      expect(response.body.chocolates).to.deep.equal(expectedResponse);
    });

    it("Retorna uma lista vazia caso não encontre chocolates", async function () {
      const response = await chai
        .request(app)
        .get("/chocolates/search?name=ZZZ");

      expect(response).to.have.status(404);
      expect(response.body.chocolates).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function() {
    it('Atualiza os dados do chocolate com id 1', async function() {
      const chocolate = { 
        name: "Mint Pretty Good",
        brandId: 2
      }
      const response = await chai
        .request(app)
        .put('/chocolates/1')
        .send(chocolate);

      expect(response).to.have.status(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 1,
        name: "Mint Pretty Good",
        brandId: 2
      });
    });

    it('Retorna uma mensagem de erro ao passar um id inválido', async function() {
      const chocolate = { 
        name: "Mint Pretty Good",
        brandId: 2
      };
      const response = await chai
        .request(app)
        .put('/chocolates/555')
        .send(chocolate);

        expect(response).to.have.status(404);
        expect(response.body).to.deep.equal({ message: 'chocolate not found' });
    });
  });
});
