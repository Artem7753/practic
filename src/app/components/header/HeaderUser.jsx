import React from 'react';

export default class HeaderUser extends React.Component{
    render(){
        return <div className="header-user">
            <div className="header-user__text">Hello {this.props.user} !</div>
        </div>
    }
}