exports.up = knex =>
  knex.schema.createTable("bit", table => {
    table.increments("id").primary();
    table.string("content");
    table.integer("order");
    table.dateTime("created_at");
    table.dateTime("updated_at");
    table
      .integer("tidbit_id")
      .references("id")
      .inTable("tidbit");
  });

exports.down = knex => knex.schema.dropTable("bit");
