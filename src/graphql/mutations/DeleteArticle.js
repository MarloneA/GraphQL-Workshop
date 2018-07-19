import gql from 'graphql-tag';

const DELETE_ARTICLE = gql`
  mutation{
    deleteArticle(type: String, ){
      article{
        name 
      }
    }
  }`

export default DELETE_ARTICLE;
