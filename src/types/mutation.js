const Mutation = `
  type Mutation {
    createCar(make: String, model: String, year: Int): Car
    updateCar(id: Int, make: String, model: String, year: Int): Car
    deleteCar(id: Int): Boolean
  }
`;

export default Mutation;
