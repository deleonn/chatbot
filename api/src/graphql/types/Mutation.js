const Mutation = `
  type Mutation {
    createUser(input: UserInput!): User!
    login(input: LoginInput!): Session!
  }
`;

export default Mutation;
