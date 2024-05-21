import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache,
});

export default apolloClient;
