import gql from 'graphql-tag';

const CREATE_ARTICLE = gql`
  mutation{
    createArticle(type: String, ){
      article{
        id
        title
        content
      }
    }
  }`

export default CREATE_ARTICLE;
