import React from 'react';
import '../../styles/post.css';
import Post__img from './Post__img';
import Post__info from './Post__info';

export default class FullPost extends React.Component {
    render() {
        return <div className="post-wrapper">
            <div className="fullpost">
                <Post__img image={this.props.image} />
                <Post__info buttontext={"Back"} appstate={this.props.appstate}/>
            </div>
        </div>
    }
}