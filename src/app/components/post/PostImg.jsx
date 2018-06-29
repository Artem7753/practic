import React from 'react';

export default class PostImg extends React.Component {
    render() {
        return <div className="post__image">
            <img src={this.props.image} alt="zenfone" className="post__image__pic" />
        </div>
    }
}