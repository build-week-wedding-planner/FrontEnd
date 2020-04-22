import React from 'react';
import { connect } from 'react-redux';
import { addNewPost } from './actions';


var section = {
    'display': 'flex',
    'justify-content': 'center',
}
var form = {
    'width': '50%'
}

class PostForm extends React.Component {
    state = {
        post: {
            "eventname": "",
            "date": "",
            "description": "",
            "location": "",
            "theme": "",
            "vendors": ""
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
    
    addPost = e => {
        e.preventDefault();
        this.props.addNewPost(this.state.post).then(() => {
          this.props.history.push('/');
        });
        console.log(this.state.post)
        this.setState({
            post: {
                "eventname": "",
                "date": "",
                "description": "",
                "location": "",
                "theme": "",
                "vendors": ""
            }
        });
    };

    render() {
        return (
            <section class="section has-text-centered" style={section}>
                <form onSubmit={this.addPost} style={form}>
                <div class="field">
                        <div class="control">
                            <input
                                class="input is-primary"
                                type="text"
                                name="eventname"
                                placeholder="Name of the Wedding!"
                                value={this.state.post.eventname}
                                onChange={this.handleChanges}
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input
                                class="input is-primary"
                                type="text"
                                name="date"
                                placeholder="Date of the Wedding!"
                                value={this.state.post.date}
                                onChange={this.handleChanges}
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <textarea
                                class="textarea is-primary"
                                type="text"
                                name="description"
                                placeholder="Description of the Wedding!"
                                value={this.state.post.description}
                                onChange={this.handleChanges}
                                rows="5"
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input
                                class="input is-primary"
                                type="text"
                                name="location"
                                placeholder="Location of the Wedding!"
                                value={this.state.post.location}
                                onChange={this.handleChanges}
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input
                                class="input is-primary"
                                type="text"
                                name="theme"
                                placeholder="Wedding Theme!"
                                value={this.state.post.theme}
                                onChange={this.handleChanges}
                            />
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <textarea
                                class="textarea is-primary"
                                type="text"
                                name="vendors"
                                placeholder="List of Vendors Used!"
                                value={this.state.post.vendors}
                                onChange={this.handleChanges}
                                rows="5"
                            />
                        </div>
                    </div>
                    <button class="button is-primary">Post Wedding!</button>
                </form>
            </section>
            
        );
    }  
}

export default connect(null, { addNewPost })(PostForm)
