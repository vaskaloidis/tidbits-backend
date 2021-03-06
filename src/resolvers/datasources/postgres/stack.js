const { DataSource } = require("apollo-datasource");

class StackAPI extends DataSource {
  constructor(database) {
    super();
    this.database = database;
  }

  initialize(config) {
    this.context = config.context;
  }

  async create(data) {
    const result = await this.database("stack")
      .returning("id")
      .insert(data);
    return this.single(result[0]);
  }

  async delete(id) {
    const result = await this.database("stack")
      .where("id", id)
      .del();
    return result;
  }

  async update({ name, language, id }) {
    const updateable = { name, language };
    updateable.updatedAt = Date.now();
    await this.database("stack")
      .where("id", id)
      .update(updateable);
    return this.stack(id);
  }

  async all() {
    const result = await this.database("stack");
    return result;
  }

  async single(id) {
    const result = await this.database("stack")
      .where("id", id)
      .first();
    return result;
  }

  async query(query) {
    const result = await this.database("stack").where(query);
    return result;
  }
}

module.exports = StackAPI;
