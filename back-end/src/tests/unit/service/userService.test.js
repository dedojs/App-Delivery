// const Factory = require('../../../Factory');

// const sinon = require('sinon');
// const { expect } = require('chai');

// const { mockArray } = require('../../mocks/allMocks')
// const models = require('../../../database/models');


// describe('Testa a função  da camada models', () => {

//   const userRepo = Factory.user().userService;

//   afterEach(sinon.restore);

//   describe("quando create da certo", () => {
//     it("sucessfully", async () => {
//       sinon.stub(models.User, 'create').resolves();
//       const response = await userRepo.create(mockArray);
//       expect(response).to.be.deep.equal(mockArray);
//     });
//   });
// });
