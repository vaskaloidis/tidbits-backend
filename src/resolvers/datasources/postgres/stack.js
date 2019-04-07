const { DataSource } = require("apollo-datasource");

class ChunkAPI extends DataSource {
  constructor(database) {
    super();
    this.database = database;
  }

  initialize(config) {
    this.context = config.context;
  }

  async create(data) {
    const result = await this.database("chunk")
      .returning("id")
      .insert(data);
    return this.chunk(result[0]);
  }

  async delete(id) {
    const result = await this.database("chunk")
      .where("id", id)
      .del();
    return result;
  }

  async update({ name, language, id }) {
    const updateable = { name, language };
    updateable.updatedAt = Date.now();
    await this.database("chunk")
      .where("id", id)
      .update(updateable);
    return this.chunk(id);
  }

  async all() {
    const result = await this.database("chunk");
    return result;
  }

  async single(id) {
    const result = await this.database("chunk")
      .where("id", id)
      .first();
    return result;
  }
}

module.exports = ChunkAPI;
