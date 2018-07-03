import React from 'react';
import './post.css';
import PostImg from './PostImg';
import PostInfo from './PostInfo';

export default class Post extends React.Component {

    constructor(){
        super();
        this.getId = this.getId.bind(this);
    }

    getId(){
        return this.props.id;
    }

    render() {
        let postId = 'post-' + this.props.id;
        let postPath = '/post/' + this.props.id;
        return (
            <div className="post" id={postId}>
                <div className="detele-button">X</div>
                <PostImg image={this.props.image} alt={this.props.alt} />
                <PostInfo buttontext={"More.."} path={postPath}  title={this.props.title} description={this.props.description}/>
            </div>
        );
    }
}