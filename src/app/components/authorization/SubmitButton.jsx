import React from 'react';

export default class SubmitButton extends React.Component{

    render(){
        return  <a href="/"><div className="button" onClick={() => {
            let data = {login : this.props.data.login, password : this.props.data.password} ;
            fetch('http://localhost:3000/user', {  
                method: 'POST',  
                mode: 'cors',
                body: JSON.stringify(data),
              });
              console.log('request');
        }}>
           <div className="button__text">{this.props.text}</div>
        </div></a>
    }
}