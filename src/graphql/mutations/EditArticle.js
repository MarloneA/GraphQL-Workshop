import gql from 'graphql-tag';

const EDIT_ARTICLE = gql`
  mutation{
    editArticle(type: String, ){
      article{
        id
        title
        content
      }
    }
  }`

export default EDIT_ARTICLE;
