import React from 'react';
import './post.css';
import PostImg from './PostImg';
import PostInfo from './PostInfo';

export default class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <div className="detele-button">X</div>
                <PostImg image={this.props.image} alt={this.props.alt} />
                <PostInfo buttontext={"More.."} appstate={this.props.appstate} title={this.props.title} description={this.props.description} />
            </div>
        );
    }
}