import React from 'react';
import '../../styles/post.css';
import Post__img from './Post__img';
import Post__info from './Post__info';

export default class Post extends React.Component {
    render() {
        return <div className="post">
           <Post__img image={this.props.image}/>
           <Post__info buttontext={"More.."} appstate={this.props.appstate}/>
        </div>
    }
}