import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import AllTodos from './AllTodos';
import './App.css';


class App extends Component {
  render() {
    const client = new ApolloClient({
      link: new HttpLink({ uri: 'https://fakerql.com/' }),
      cache: new InMemoryCache()
  });
    return (
      <ApolloProvider client={client}>
        <div>
          <AllTodos />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
