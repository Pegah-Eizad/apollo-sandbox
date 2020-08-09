import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom'; 
import Pages from './pages';
import injectStyles from './styles'

const cache = new InMemoryCache();
const link: any = new HttpLink({
  uri: 'http://localhost:4000/'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>, 
  document.getElementById('root')
);