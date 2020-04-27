import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
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

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
          .then(() => (this.props.history.push("/"),  window.location.reload()));
      };

    render() {
        return (
            <section class="section">
                <form onSubmit={this.login}>
                    <div class="field is-horizontal">
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                <input
                                    class="input is-primary"
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
                                        class="input is-primary"
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.credentials.password}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <button class="button is-primary">Log in</button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }  
}

export default connect(null, { login })(Login)
