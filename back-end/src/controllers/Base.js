class BaseController {
  constructor(service) {
    this.service = service;
    this.create = this.create.bind(this);
    this.read = this.read.bind(this);
    this.readOne = this.readOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async create(req, res) {
    const request = await this.service.create(req.body);
    return res.status(201).json(request);
  }

  async read(_req, res) {
    const data = await this.service.read();
    return res.status(200).json(data);
  }

  async readOne(req, res) {
    const data = await this.service.readOne(req.params.id);
    return res.status(200).json(data);
  }

  async update(req, res) {
    const data = await this.service.update(req.params.id, req.body);
    return res.status(200).json(data);
  }

  async delete(req, res) {
    await this.service.delete(req.params.id);
    return res.status(204).end();
  }
}

module.exports = BaseController;
