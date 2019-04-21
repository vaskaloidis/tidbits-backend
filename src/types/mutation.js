const Mutation = `
  type Mutation {
    createStack(name: String, defaultLanguage: String): Stack
    createTidbit(content: String, language: String): Tidbit
    addBit(tidbit_id: Int, content: String): Tidbit
    updateBit(bit_id: Int): Bit
    deleteStack(id: Int): Boolean
    deleteTidbit(id: Int): Boolean
    deleteBit(id: Int): Boolean
  }
`;

export default Mutation;
