import React from 'react';
import { connect } from 'react-redux';
import { addNewPlanner } from './actions';

class RegistarForm extends React.Component {
    state = {
        credentials: {
            // id: "",
            username: "",
            password: "",
            // firstName: "",
            // lastName: "",
            // location: "",
            // email: "",
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

    addPlanner = e => {
        e.preventDefault();
        this.props.addNewPlanner(this.state.credentials).then(() => {
          this.props.history.push('/protected');
        });
        this.setState({
          credentials: {
            username: "",
            password: "", 
          }
        });
    };

    render() {
        return (
            <section class="section">
                <h2>Sign Up as a Wedding Planner!</h2>
                <form onSubmit={this.addPlanner}>
                    <div class="field is-horizontal">
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    {/* <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={this.state.credentials.firstName}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.credentials.lastName}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        value={this.state.credentials.email}
                                        onChange={this.handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        value={this.state.credentials.location}
                                        onChange={this.handleChange}
                                    /> */}
                                    <input
                                        class="input"
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={this.state.credentials.username}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div class="field">
                                <div class="control">
                                    <input
                                        class="input"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.credentials.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <button class="button is-primary">Sign Up!</button>
                        </div>
                    </div>
                </form>
            </section>
            
        );
    }  
}

export default connect(null, { addNewPlanner })(RegistarForm)
