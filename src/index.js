import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './ApolloClient';

ReactDOM.render(
      <ApolloProvider client={apolloClient}>
          <App />
      </ApolloProvider>,
    document.getElementById('root'),
);
