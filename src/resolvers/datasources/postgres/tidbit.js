const { DataSource } = require("apollo-datasource");

class TidbitAPI extends DataSource {
  constructor(database) {
    super();
    this.database = database;
  }

  initialize(config) {
    this.context = config.context;
  }

  async create(data) {
    const result = await this.database("tidbit")
      .returning("id")
      .insert(data);
    return this.single(result[0]);
  }

  async delete(id) {
    const result = await this.database("tidbit")
      .where("id", id)
      .del();
    return result;
  }

  async update({ content, language, id }) {
    const updateable = { content, language };
    updateable.updatedAt = Date.now();
    await this.database("tidbit")
      .where("id", id)
      .update(updateable);
    return this.tidbit(id);
  }

  async all() {
    const result = await this.database("tidbit");
    return result;
  }

  async query(query) {
    const result = await this.database("tidbit").where(query);
    return result;
  }

  async single(id) {
    const result = await this.database("tidbit")
      .where("id", id)
      .first();
    return result;
  }
}

module.exports = TidbitAPI;
