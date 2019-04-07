import resolvers from "../../src/resolvers/index";

// This "Mocks" the datasource found in .app
const mockContext = {
  dataSources: {
    carAPI: {
      cars: jest.fn(),
      carsByModel: jest.fn()
    }
  }
};

// Here is an example (this test passes):

// This tests that the GraphQL query to test the Query.cars works correctly
describe("[Query.cars]", () => {
  it("queries all cars", async () => {
    // Here we make a "mock" dataset that we want Postgres layer to return
    // ... This allows us to only test the GraphQL layer here. We test the
    // ... Postgres layer elsewhere
    const car1 = { make: "Ford", model: "Mustang", year: 2009 };
    const car2 = { make: "Dodge", model: "Charger", year: 2015 };
    const car3 = { make: "Subaru", model: "WRX", year: 2016 };
    const carsMock = [car1, car2, car3];

    // We are mocking the data with the 3 objects we just created above
    mockContext.dataSources.carAPI.cars.mockReturnValueOnce(carsMock);

    // We mock the actual Cars GraphQL Query, making it return our data above
    // We do this because we only want to test our GraphQL Query, not the underlying
    // Postgres query. So we just mock it. Research mocking for more information.
    const response = await resolvers.Query.cars(null, {}, mockContext);

    const expectedResult = carsMock;

    // Here we test to see that the GraphQL Query returns our data we expected. Thus
    // passing our test
    expect(response).toEqual(expectedResult);
  });
});

// Your turn. Make this one pass:

describe("[Query.fordCars]", () => {
  it("queries only Ford cars", async () => {
    /**
     * TASK: Create the Mock test data here. Put multiple Ford car objects in the mock
     * result so you can test whether or not those are returned from our endpoint below
     */
    const ford1 = { make: "Ford", model: "Mustang", year: 2009 };
    const ford2 = { make: "Ford", model: "F150", year: 2018 };
    const ford3 = { make: "Ford", model: "F250", year: 2018 };
    const fords = [ford1, ford2, ford3];
    /**
     * TASK: Mock the carAPI query endpoint fordCars using mockReturnValueOnce().
     * Return the object you created here above
     * Reference the carAPI.js file
     */
    mockContext.dataSources.carAPI.carsByModel.mockReturnValueOnce(fords);
    /**
     * This is the GraphQL Query we are hitting for data
     * TASK: Make it hit the correct endpoint
     * const response = await resolvers.Query.GRAPHQL_QUERY_HERE(null, {}, mockContext);
     */
    const response = await resolvers.Query.fordCars(null, {}, mockContext);
    /**
     * Helper: prints out the response from the graphQL endpoint hit above
     * console.log(response);
     */
    /**
     * TASK: Populate this with your expected result. (What you want to see the GraphQL Query return)
     * const expectedResult = [];
     *
     */
    const expectedResult = [ford1, ford2, ford3];
    /**
     * TASK: Test whatever you want to here
     * expect(response).toEqual(expectedResult);
     */
    expect(response).toEqual(expectedResult);
  });
});

// Task: run 'sh scripts/test.sh' and both tests should pass (2 total tests, 2 pass)
