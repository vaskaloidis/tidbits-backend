const Query = `
  type Query {
    car(id: Int): Car
    cars: [Car]
    fordCars: [Car]
    carsByYear(year: Int): [Car]
  }
`;

export default Query;
