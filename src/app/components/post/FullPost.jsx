import React from 'react';
import './post.css';
import PostImg from './PostImg';
import PostInfo from './PostInfo';

export default class FullPost extends React.Component {
    render() {
        return <div className="post-wrapper">
            <div className="fullpost">
                <PostImg image={this.props.image} />
                <PostInfo buttontext={"Back"} appstate={this.props.appstate}/>
            </div>
        </div>
    }
}