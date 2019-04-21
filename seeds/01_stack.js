exports.seed = function(knex, Promise) {
  return knex("stack")
    .del()
    .then(function() {
      return knex("stack").insert([
        { id: 1, name: "Shell Commands", default_language: "Shell" }
      ]);
    });
};
