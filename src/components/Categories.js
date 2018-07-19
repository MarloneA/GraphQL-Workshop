import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import GET_CATEGORIES from '../graphql/queries/Categories';
import '../styles/createcategory.css'

class Category extends Component{
    render() {
        let { data } = this.props
          if (data.loading) return <p>Loading...</p>;
          if (data.error) return <p>Error :(</p>;

    return (
        <div className="categories-table">
            {console.log(data)}
            <table>
            <tr>
                <th>Name</th>
                <th>description</th> 
            </tr>
            {data.categories.map((item, index) => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                </tr>
            ))}  
            </table>   
        </div>
    );
    }
}
    
Category = graphql(GET_CATEGORIES)(Category)
export default Category;
  