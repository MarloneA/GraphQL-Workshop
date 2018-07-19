import gql from 'graphql-tag';

const GET_ARTICLES = gql`{
    articles{
        title
        content
    }
}`

export default GET_ARTICLES;
