import React from 'react';

export default class DeleteButton extends React.Component{
    render(){
        return <a href="/"><div className="detele-button" onClick={() => {
            fetch('http://localhost:3000/delete/' + this.props.id);
        }}>X</div></a>
    }
}