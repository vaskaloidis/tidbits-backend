exports.up = knex =>
  knex.schema.createTable("tidbit", table => {
    table.increments("id").primary();
    table.string("name");
    table.string("language");
    table.dateTime("created_at");
    table.dateTime("updated_at");
    table
      .integer("stack_id")
      .references("id")
      .inTable("stack");
  });

exports.down = knex => knex.schema.dropTable("tidbit");
