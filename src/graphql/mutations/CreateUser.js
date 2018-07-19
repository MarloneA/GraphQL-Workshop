import gql from 'graphql-tag';

const CREATE_ARTICLE = gql`
  mutation{
    createUser(type: String, ){
      user{
        id
        email
        username
        password
      }
    }
  }`

export default CREATE_ARTICLE;
