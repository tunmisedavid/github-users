import { onError } from '@apollo/client/link/error';
// import { GraphQLErrors, NetworkError } from './../node_modules/@apollo/client/v4-migration.d';
import { InMemoryCache } from "@apollo/client";
import { ApolloClient, HttpLink } from "@apollo/client";
import { ApolloLink } from "@apollo/client";

const errorLink = onError(({GraphQLErrors, NetworkError}) => {
  if(GraphQLErrors){
    GraphQLErrors.forEach(({message, locations, path}) => {
      console.error(
        `[GraphQl error]: Message: ${message}, Location: ${locations}, path:${path}`
      )
      if(NetworkError){
        console.error(`[Network Error]: ${NetworkError}`)
      }
    });
  }
})

const GITHUB_GRAPHQL_API = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL_API,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});


const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})


export default client;

