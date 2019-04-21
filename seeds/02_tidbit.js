exports.seed = function(knex, Promise) {
  return knex("tidbit")
    .del()
    .then(function() {
      return knex("tidbit").insert([{ id: 1, stack_id: 1 }]);
    });
};
