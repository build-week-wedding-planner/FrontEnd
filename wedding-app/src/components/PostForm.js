import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions';



class PostForm extends React.Component {
    state = {
        post: {
            id: '',
            description: '',
            location: '',
            theme: '',
            vendors: ''
        }
    }

    handleChange = e => {
        this.setState({
          post: {
            ...this.state.post,
            [e.target.name]: e.target.value
          }
        });
      };

    render() {
        return (
            <div className="postForm">
                <form>
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Description of the Wedding!"
                        value={this.state.post.description}
                        onChange={this.handleChange}
                        rows="5"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location of the Wedding!"
                        value={this.state.post.location}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="theme"
                        placeholder="Wedding Theme!"
                        value={this.state.post.theme}
                        onChange={this.handleChange}
                    />
                    <textarea
                        type="text"
                        name="vendors"
                        placeholder="List of Vendors Used!"
                        value={this.state.post.vendors}
                        onChange={this.handleChange}
                        rows="5"
                    />
                    <button>Post Wedding!</button>
                </form>
            </div>
            
        );
    }  
}

export default connect(null, { login })(PostForm)