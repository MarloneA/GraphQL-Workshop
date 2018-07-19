import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import CREATE_USER from '../graphql/mutations/CreateUser';
import '../styles/createcategory.css'

class CreateUser extends Component{
    state = {
        username: '',
        email: '',
        password: '',
    }

    handleInputChange =(event)=>{
        const {name, value} = event.target;
        this.setState({[name]:value})
        }

    handleCreateUser =(event)=>{
        event.preventDefault();

    }
        
    render() {
        const {username, email, password} = this.state

    return (
        <div className="cat">
            <form onSubmit={this.handleCreateUser}>
            <h3>SignUp</h3><br/>
            <div>
                <label>Username</label><br/>
                <input name="username" type="text" value={username} onChange={this.handleInputChange}/>
            </div><br/>
            <div>
                <label>Email</label><br/>
                <input name="email" type="email" value={email} onChange={this.handleInputChange}/>
            </div><br/>
            <div>
                <label>Password</label><br/>
                <input name="password" type="password" value={password} onChange={this.handleInputChange}/>
            </div><br/>
            <button  className="btn btn-primary" type="submit">SignUp</button>
            </form>
        </div>
    );
    }
}
    
CreateUser = graphql(CREATE_USER)(CreateUser)
export default CreateUser;
  