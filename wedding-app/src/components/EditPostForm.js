import React from 'react';

class EditPostForm extends React.Component {
    state = {
        post: this.props.post
    }

    handleChanges = e => {
        let value = e.target.value;
        this.setState({
          post: {
            ...this.state.post,
            [e.target.name]: value
          }
        });
      };

    editPost = e => {
        this.props.editPost(e, this.state.post)
    }

    render() {
        return (
            <div className="editPostDiv">
                <form onSubmit={this.editPost}>
                <input
                        type="text"
                        name="eventname"
                        placeholder="Name of the Wedding!"
                        value={this.state.post.eventname}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder="Date of the Wedding!"
                        value={this.state.post.date}
                        onChange={this.handleChange}
                    />
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
                    <button>Edit Wedding Post!</button>
                </form>
            </div>
        )
    }
}

export default EditPostForm;