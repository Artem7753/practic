import React from 'react';

export default class Button extends React.Component{
    render(){
        return <div className="button" onClick={() => this.props.appstate()}>
            <div className="button__text">{this.props.text}</div>
        </div>
    }
}