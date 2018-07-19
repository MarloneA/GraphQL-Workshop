import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import CREATE_CATEGORY from '../graphql/mutations/CreateCategory';
import '../styles/createcategory.css'

class CreateCategory extends Component{
    state = {
        category_name: '',
        description: '',
    }

    handleInputChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
        }

    handleCreateCategory =(event)=>{
        event.preventDefault();
        this.props
            .mutate({ variables: {name:category_name, description:description}})
            .then(response => {
                notify.show('Category created successfully', 'success', 4000);
                })
            }
        
    render() {
        const {category_name, description} = this.state

    return (
        <div className="cat">
            <form onSubmit={this.handleCreateCategory}>
            <h3>Create Category</h3><br/>
            <div>
                <label>Category Name</label><br/>
                <input name="category_name" type="text" value={category_name} onChange={this.handleInputChange}/>
            </div><br/>
            <div>
                <label>Description</label><br/>
                <input name="description" type="text" value={description} onChange={this.handleInputChange}/>
            </div><br/>
            <button  className="btn btn-primary" type="submit">Create</button>
            </form>
        </div>
    );
    }
}
    
CreateCategory = graphql(CREATE_CATEGORY)(CreateCategory)
export default CreateCategory;
  