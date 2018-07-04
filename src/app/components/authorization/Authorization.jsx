import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './authorization.css';
import SubmitButton from './SubmitButton';

export default class Authorization extends React.Component{

    state = {
        login : '',
        password : ''
    }

    render(){
        return <div className="authorization">
            <Header/>

            <div className="form">
                <input type="text" className="input" placeholder="Login" value={this.state.login} onChange={ e => this.setState({login : e.target.value})}/>
                <input type="password" className="input" placeholder="Password" value={this.state.password} onChange={ e => this.setState({password : e.target.value})}/>
                <SubmitButton text={'Login'} data={this.state}/>
            </div>

            <Footer/>
        </div>
    }
}