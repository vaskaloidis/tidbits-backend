import { database } from "../common";
import Tidbit from "./tidbit";

const Stack = database.Model.extend({
  tableName: "stacks",
  tidbits: async () => this.hasMany(Tidbit)
});

export default Stack;
