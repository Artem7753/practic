import React from 'react';
import AddButton from './AddButton';

export default class TextInput extends React.Component{

    componentDidMount(){
        this.id = this.props.lastID;
        this.title = document.getElementById('title');
        this.description = document.getElementById('desc');
        this.image = document.getElementById('image');

        this.data = {
            id : this.id,
            title : this.title,
            image : this.image,
            description : this.description
        } ;

        console.log(this.data);
    }

    render(){
        return <div className="inputform">
            <input type="text" className="textinput" placeholder="Title" id="title"/>
            <input type="text" className="textinput" placeholder="Image url" id="image"/>
            <textarea name="" id="desc" cols="30" rows="10" className="textinput"></textarea>
            <AddButton text={"Add"} lastId={this.props.lastId} inputs={this.data}/>
        </div>
    }
}