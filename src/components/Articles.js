import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import GET_ARTICLES from '../graphql/queries/Articles';
import EditArticle from './EditArticle';
import DeleteArticle from '../graphql/mutations/DeleteArticle';

class Articles extends Component{
    render() {
        let { data } = this.props
          if (data.loading) return <p>Loading...</p>;
          if (data.error) return <p>Error :(</p>;

    return (
        <div>
            {console.log(data)}
            <table>
            <tr>
                <th>Title</th>
                <th>Content</th> 
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {data.articles.map((item, index) => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.content}</td> 
                  <td><EditArticle/></td>
                  <td><DeleteArticle/></td>
                </tr>
            ))}
        </table>
        </div>
    );
    }
}
    
Articles = graphql(GET_ARTICLES)(Articles)
export default Articles;
  