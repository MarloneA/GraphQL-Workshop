import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import { gql } from 'apollo-boost';
import 

const mutation = `
    createTodo {(
        title: String!
        completed: Boolean
    ): Todo
    }
  }`
  
class AddTodos extends Component{
    render() {
        let { data } = this.props
          if (data.loading) return <p>Loading...</p>;
          if (data.error) return <p>Error :(</p>;

    return (
        <div>
        </div>
    );
    }
}
    
AddTodos = graphql(mutation)(AddTodos)
export default AddTodos;
  