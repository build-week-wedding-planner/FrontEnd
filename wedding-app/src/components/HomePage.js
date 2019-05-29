import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import img from '../wedding.jpg'

class HomePage extends React.Component {
   

    render() {
        console.log(this.props);
        return (
            <div className="homePageDiv">
                <h2>Welcome to Wedding Planner Portfolio!</h2>
                {this.props.posts.map(post => {
                    return (
                        <div className="postCard" key={post.id}>
                            <i
                                class="fas fa-times"
                            />
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

  export default withRouter(connect(mapStateToProps, {})(HomePage))
