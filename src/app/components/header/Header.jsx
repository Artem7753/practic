import React from 'react';
import Header__logo from './HeaderLogo';
import Header__nav from './HeaderNav';
import './head.css';

export default class Header extends React.Component{
    render(){
        return <div className="header">
            <Header__logo/>
            <Header__nav/>
        </div>;
    }
}