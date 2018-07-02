import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './authorization.css';

export default class Authorization extends React.Component{

    render(){
        return <div className="authorization">
            <Header/>

            <div className="form">
                <input type="text" className="input" placeholder="E-mail"/>
                <input type="password" className="input" placeholder="Password"/>
            </div>

            <Footer/>
        </div>
    }
}