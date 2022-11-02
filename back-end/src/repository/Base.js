class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  create(obj) {
    return this.model.create(obj);
  }

  read() {
    return this.model.findAll();
  }

  readOne(id) {
    return this.model.findByPk(id);
  }

  update(id, obj) {
    return this.model.update(id, obj);
  }

  delete(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = BaseRepository;