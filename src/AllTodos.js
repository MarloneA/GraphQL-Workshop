import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import query from './Query';

class AllTodos extends Component{
    render() {
        let { data } = this.props
          if (data.loading) return <p>Loading...</p>;
          if (data.error) return <p>Error :(</p>;

    return (
        <div>
            {data.allTodos.map((item, index) => (
                <p key ={item.title}>
                {item.completed} >
                </p>
            ))}
        </div>
    );
    }
}
    
AllTodos = graphql(query)(AllTodos)
export default AllTodos;
  
