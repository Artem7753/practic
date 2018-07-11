import React from 'react';
import './post.css';
import PostImg from './PostImg';
import PostInfo from './PostInfo';
import DeleteButton from './DeleteButton';
import store from '../../stores/reduxStore';
import {connect} from 'react-redux';

class Post extends React.Component {

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
        let id = this.props.id;
        return (
            <div className="post" id={postId}>
                {this.props.admin == 1 && <DeleteButton id={id}/>}
                <PostImg image={this.props.image} alt={this.props.alt} />
                <PostInfo buttontext={"More.."} path={postPath}  title={this.props.title} description={this.props.description}/>
            </div>
        );
    }
}


function mapStateToProps(store){
    return {
        posts : store.posts.posts,
        is_loading : store.posts.is_loading
    }
}

export default connect(mapStateToProps)(Post);