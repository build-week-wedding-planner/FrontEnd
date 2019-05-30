import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getPost } from './actions';

import img from '../wedding.jpg'

class HomePage extends React.Component {

    componentDidMount() {
        this.props.getPost()
    }
   

    render() {
        console.log(this.props.posts);
        return (
            <div className="homePageDiv">
                <h2>Welcome to Wedding Planner Portfolio!</h2>
                {this.props.posts.map(post => {
                    return (
                        <div className="postCard" key={post.id}>
                            <h4>{localStorage.getItem('user')}</h4>
                            <i
                                className="fas fa-times"
                            />
                            <i className="fas fa-pen"></i>
                            <img src={img} alt='wedding reception table'/>
                            <p>{post.description}</p>
                            <p>{post.location}</p>
                            <p>{post.theme}</p>
                            <p>{post.vendors}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts
  });

  export default withRouter(connect(mapStateToProps, { getPost })(HomePage))
