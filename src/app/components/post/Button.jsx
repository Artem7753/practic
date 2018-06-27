import React from 'react';
import FullPost from './FullPost';
import App from '../App';

export default class Button extends React.Component{
    render(){
        return <div className="button" onClick={() => this.props.appstate()}>
            <div className="button__text">{this.props.text}</div>
        </div>
    }
}