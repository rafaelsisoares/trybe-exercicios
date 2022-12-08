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
      expect(response.body.chocolates).to.deep.equal({
        id: 4,
        name: "Mounds",
        brandId: 3,
      });
    });
    it('Retorna o status 404 ao colocar um id inválido', async function () {
        const response = await chai.request(app).get("/chocolates/100");

        expect(response).to.have.status(404);
        expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
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
});
