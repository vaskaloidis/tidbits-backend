import { gql } from "apollo-server-express";

// Objects
import Stack from "./objects/stack";
import Tidbit from "./objects/tidbit";
import Bit from "./objects/bit";

import Query from "./query";
import Mutation from "./mutation";

// Add State Enum:   // ${State}
const typeDefs = gql`
  ${Mutation}
  ${Query}
  ${Stack}
  ${Tidbit}
  ${Bit}
`;

export default typeDefs;
