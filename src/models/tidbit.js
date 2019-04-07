import { database } from "../common";

const Tidbit = database.Model.extend({
  tableName: "tidbits",
  stacks: async () => this.belongsToMany(Stack)
});

export default Tidbit;
