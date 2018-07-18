import { gql } from 'graphql-tag';

const query = gql`{
    allTodos{
      title
      completed  
    }
  }`

export default query;



  