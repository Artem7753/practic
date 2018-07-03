import React from 'react';

export default class AddButton extends React.Component{

    render(){
        return  <div className="button" onClick={() => {

            console.log(this.props.inputs.title.value);
            console.log(this.props.inputs.image.value);
            console.log(this.props.inputs.description.value);

            let data = {
                title : 'afaf',
                image : 'adsda',
                description : "adaafasf"
            } ;

            var request = new XMLHttpRequest();
             request.open("put", "http://localhost:3000/insert");
             request.setRequestHeader("Content-type", "Application/json");
             request.send(data);

              console.log('request');
        }}>
           <div className="button__text">{this.props.text}</div>
        </div>
    }
}