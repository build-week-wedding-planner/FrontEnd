import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';

class RegistarForm extends React.Component {
    state = {
        credentials: {
            username: "",
            password: "",
            name: "",
            location: "",
        }
    }

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    render() {
        return (
            <div className="registarForm">
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.credentials.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={this.state.credentials.location}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Sign Up!</button>
                </form>
            </div>
            
        );
    }  
}

export default connect(null, { login })(RegistarForm)