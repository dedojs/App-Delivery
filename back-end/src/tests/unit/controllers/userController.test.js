// const Factory = require('../../../Factory');

// const sinon = require('sinon');
// const { expect } = require('chai');


// const models = require('../../../database/models');

// describe('Testa a função  da camada models', () => {

//   const mock = {
//     id: 2,
//     name: 'Fulana Pereira',
//     email: 'fulana@deliveryapp.com',
//     password: '3c28d2b0881bf46457a853e0b07531c6',
//     role: 'seller'
//   }

//   const userRepo = Factory.user().userRepository;

//   afterEach(sinon.restore);

//   describe('quando o retorno é bem sucedido', () => {
    
//     it('retorna um obj', async () => {
//       sinon.stub(models.User, 'findOne').resolves(mock);
      
//       const response = await userRepo.getOneUser(mock.email);

//       expect(response).to.be.an('object');
//     });
//   });
// });
