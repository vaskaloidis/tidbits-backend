const Query = `
  type Query {
    stacks: [Stack]
    stack(id: Int): Stack
  }
`;

export default Query;
