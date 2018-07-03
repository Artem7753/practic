import React from 'react';
import { Link } from 'react-router-dom';

export default class Button extends React.Component{

    render(){
        return <Link to={""+this.props.path}> <div className="button">
           <div className="button__text">{this.props.text}</div>
        </div>
        </Link>
    }
}