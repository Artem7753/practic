import React from 'react';
import Button from './Button';

export default class TextInput extends React.Component{
    render(){
        return <div className="inputform">
            <textarea name="" id="" cols="30" rows="10" className="textinput"></textarea>
            <Button text={"Add"}/>
        </div>
    }
}