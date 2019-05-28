import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class HomePage extends React.Component {
   

    render() {
        console.log(this.props);
        return (
            <div className="homePageDiv">
                {this.props.posts.map(post => {
                    return (
                        <div className="postCard" key={post.id}>
                            <i
                                class="fas fa-times"
                            />
                            <img src={post.img} alt={post.location} />
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
