const { httpStatusCode } = require('../helpers');
const BaseController = require('./Base');

class UserController extends BaseController {
  constructor(service) {
    super(service);
    this.login = this.login.bind(this);
    this.adminCreate = this.adminCreate.bind(this);
  }
  
  async login(req, res) {
    const token = await this.service.login(req.body);
    return res.status(200).json(token);
  }

  async adminCreate(req, res) {
    const request = await this.service.adminCreate(req.body);
    return res.status(httpStatusCode.CREATED).json(request);
  }
}

module.exports = UserController;