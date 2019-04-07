const resolvers = {
  Car: {},
  Query: {
    car: async (parent, args, { dataSources }) =>
      dataSources.carAPI.car(args.id),
    cars: async (parent, args, { dataSources }) => dataSources.carAPI.cars(),
    fordCars: async (parent, args, { dataSources }) =>
      dataSources.carAPI.carsByModel({ make: "Ford" }),
    carsByYear: async (parent, args, { dataSources }) =>
      dataSources.carAPI.carsByYear(args)
  },
  Mutation: {
    createCar: async (parent, args, { dataSources }) =>
      dataSources.carAPI.createCar(args),
    deleteCar: async (parent, args, { dataSources }) =>
      dataSources.carAPI.deleteCar(args.id),
    updateCar: async (parent, args, { dataSources }) =>
      dataSources.carAPI.updateCar(args)
  }
};

export default resolvers;
