const sinon = require('sinon');
const chai = require('chai');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP)

const Factory = require("../../../Factory");

const { expect } = require("chai");

const models = require("../../../database/models");

describe("Testa a função  da camada models", () => {
  afterEach(sinon.restore);
  const userRepo = Factory.user().userRepository;

  const mockLoginIncorrect = {
    name: "Admin",
    email: "adm@deliveryapp.com",
    password: "senhaerrada",
  };
  
  const mockLoginCorrect = {
    name: "Admin",
    email: "adm@deliveryapp.com",
    password: "--adm2@22!!--",
  };
  
  const mockLogin = {
    name: "Admin",
    email: "adm@deliveryapp.com",
    password: "a4c86edecc5aee06eff8fdeda69e0d04",
    role: "admin",
  };

  describe("quando o retorno é bem sucedido", () => {
    it("retorna um obj", async () => {
      sinon.stub(models.User, "findOne").resolves(mockLogin);

      const response = await userRepo.getOneUser(mockLogin.email);

      expect(response).to.be.an('object');
    });
  });
});
