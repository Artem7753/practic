import React from 'react';
import Header__logo from './Header__logo';
import Header__nav from './Header__nav';
import '../../styles/head.css';

export default class Header extends React.Component{
    render(){
        return <div className="header">
            <Header__logo/>
            <Header__nav/>
        </div>;
    }
}