import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import './head.css';
import HeaderUser from './HeaderUser';

export default class Header extends React.Component{
    render(){
        return <div className="header">
            <HeaderLogo/>
            <HeaderNav/>
            <HeaderUser user={this.props.user}/>
        </div>;
    }
}