const resolvers = {
  Stack: {
    tidbits: async (parent, args, { dataSources }) =>
      dataSources.tidbitAPI.query({ stack_id: parent.id })
  },
  Tidbit: {
    bits: async (parent, args, { dataSources }) =>
      dataSources.bitAPI.query({ tidbit_id: parent.id })
  },
  Bit: {},
  Query: {
    stacks: async (parent, args, { dataSources }) => dataSources.stackAPI.all(),
    stack: async (parent, args, { dataSources }) =>
      dataSources.stackAPI.single(args.id)
  },
  Mutation: {
    createStack: async (parent, args, { dataSources }) =>
      dataSources.stackAPI.create(args),
    createTidbit: async (parent, args, { dataSources }) =>
      dataSources.tidbitAPI.create(args.id),
    addBit: async (parent, args, { dataSources }) =>
      dataSources.bitAPI.create(args)
  }
};

export default resolvers;
