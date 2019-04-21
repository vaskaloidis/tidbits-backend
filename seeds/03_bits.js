exports.seed = function(knex, Promise) {
  return knex("bit")
    .del()
    .then(function() {
      return knex("bit").insert([
        {
          id: 1,
          tidbit_id: 1,
          order: 0,
          content: "cd ~/Code/Javascript/tidbits-backend"
        },
        { id: 2, tidbit_id: 1, order: 1, content: "npm start local" },
        {
          id: 3,
          tidbit_id: 1,
          order: 1,
          content: "sh scripts/run-docker-local.sh"
        }
      ]);
    });
};
