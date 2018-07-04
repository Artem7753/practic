import React from 'react';

export default class AddButton extends React.Component{

    render(){
        return  <a href="/"><div className="button" onClick={() => {

            console.log(this.props.inputs.title);
            console.log(this.props.inputs.image);
            console.log(this.props.inputs.description);

            let data = {
                title : this.props.inputs.title,
                image : this.props.inputs.image,
                description : this.props.inputs.description
            } ;
            fetch('http://localhost:3000/insert', {  
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