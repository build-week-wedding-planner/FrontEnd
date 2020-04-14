import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getPost, deletePost, editPost } from './actions';

import EditPostForm from './EditPostForm';

import img from '../wedding.jpg'

var wrap = {
    'width': '100%',
    'display': 'flex',
    'flex-wrap': 'wrap'
}


class HomePage extends React.Component {
    state = {
        deletingPost: null,
        editingPostID: null
    }

    componentDidMount() {
        this.props.getPost()
    }

    deletePost = id => {
        this.setState({deletingPostID: id})
        this.props.deletePost(id)
        .then(() => (this.props.history.push("/"),  window.location.reload()));
    }

    editPost = (e, post) => {
        e.preventDefault();
        this.props.editPost(post).then(() => (
            this.setState({ editingPostID: null}),
            window.location.reload()
        )
        )}
   

    render() {
        console.log(this.props.posts);
        return (
            <section class="section has-text-centered">
                <h2>Welcome to Wedding Planner Portfolio!</h2>
                <div class="tile is-ancestor has-text-centered is-paddingless is-marginless" style={wrap}>
                {this.props.posts.map(post => {
                    if (this.state.editingPostID === post.id) {
                        return (
                        <div className="postCard" key={post.id}> 
                            <EditPostForm
                                post={post}
                                editPost={this.editPost}
                                editingPost={this.props.editingPost}
                            />
                        </div>
                        )
                    }
                    return (
                        <div class="tile is-child notification is-4" key={post.id}>
                            {localStorage.getItem('token') ? ( 
                            <div className='icons'>
                                <i 
                                    className="fas fa-pen"
                                    onClick={() => this.setState({ editingPostID: post.id})}
                                />
                                <i
                                    className="fas fa-times"
                                    onClick={() => this.deletePost(post.id)}
                                />
                            </div>
                            ) : ( null )}
                            <img src={img} alt='wedding reception table'/>
                            <div className='belowPicture'>
                                <h4>{post.eventname}</h4>
                                <p>{post.date}</p>
                                <p>{post.description}</p>
                                <p>{post.location}</p>
                                <p>{post.theme}</p>
                                <p>{post.vendors}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts,
    deletingPost: state.deletingPost,
    editingPost: state.editingPost
  });

  export default withRouter(connect(mapStateToProps, { getPost, editPost, deletePost })(HomePage))
