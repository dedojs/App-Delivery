const BaseRepository = require('./Base');

class Productpository extends BaseRepository {
  async coutByIds(products) {
    return this.model.count({ where: { id: products } });
  }
}

module.exports = Productpository;
