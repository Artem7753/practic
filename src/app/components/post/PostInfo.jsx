import React from 'react';
import Button from './button';

export default class PostInfo extends React.Component {
    render() {
        return <div className="post__info">
            <h3 className="post__info__title">{this.props.title}</h3>
            <p className="post__info__description">
                {this.props.description}
             </p>
             <Button text={this.props.buttontext} appstate={this.props.appstate}/>
        </div>
    }
}