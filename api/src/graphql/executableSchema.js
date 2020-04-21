import { makeExecutableSchema } from 'graphql-tools';

// Types
import { typeDefs } from './types';

// Mutations
import createUser from './mutations/createUser';
import login from './mutations/login';

// Queries
import me from './queries/me';

const mutationResolvers = {
  createUser,
  login,
};

const queryResolvers = {
  me,
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Mutation: mutationResolvers,
    Query: queryResolvers,
  },
});

export default schema;
