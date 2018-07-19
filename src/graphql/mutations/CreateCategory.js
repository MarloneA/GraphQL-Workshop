import gql from 'graphql-tag';

const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!, $description: String){
    createCategory(name: $name!, description: $description){
      category{
        id
        name
        description
      }
    }
  }`

export default CREATE_CATEGORY;
