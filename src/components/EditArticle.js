import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import EDIT_ARTICLE from '../graphql/mutations/EditArticle';
import '../styles/createcategory.css'

class EditArticle extends Component{
    state = {
        title: '',
        content: '',
    }

    handleInputChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
        }

    handleCreateArticle =(event)=>{
        event.preventDefault();

    }
        
    render() {
        const {title, content} = this.state

    return (
        <div className="cat">
            <form onSubmit={this.handleCreateArticle}>
            <h3>Edit Article</h3><br/>
            <div>
                <label>Title</label><br/>
                <input name="title" type="text" value={title} onChange={this.handleInputChange}/>
            </div><br/>
            <div>
                <label>Content</label><br/>
                <input name="content" type="text" value={content} onChange={this.handleInputChange}/>
            </div><br/>
            <button  className="btn btn-primary" type="submit">Edit</button>
            </form>
        </div>
    );
    }
}
    
EditArticle = graphql(EDIT_ARTICLE)(EditArticle)
export default EditArticle;
  