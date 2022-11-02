const BaseRepository = require('./Base');

class SaleProductRepository extends BaseRepository {
  async createMany(products, saleId) { // Array<produtosId>
    const formatedProducts = products.map((e) => ({ ...e, saleId }));
    const createdSale = await this.model.bulkCreate(formatedProducts);
    return createdSale;
  }
}

module.exports = SaleProductRepository;