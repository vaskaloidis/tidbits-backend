exports.up = knex =>
  knex.schema.createTable("stack", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("default_language");
    table.dateTime("created_at");
    table.dateTime("updated_at");
  });

exports.down = knex => knex.schema.dropTable("stack");
