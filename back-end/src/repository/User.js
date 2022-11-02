const BaseRepository = require('./Base');

class UserRepository extends BaseRepository {
  async getOneUser(email) {
    const data = await this.model.findOne({ where: { email } });
    return data;
  }

  async create(body) {
    const [user, created] = await this.model.findOrCreate({
      where: { email: body.email },
      defaults: { ...body, password: body.password },
    });
    const payload = user.get();
    delete payload.password;
    return { user: payload, created };
  }
}

module.exports = UserRepository;
