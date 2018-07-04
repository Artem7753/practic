import React from 'react';
import AddButton from './AddButton';

export default class TextInput extends React.Component{
    state = {
        id: undefined,
        title: '',
        description: '',
        image: '',
    }

    render(){
        return <div className="inputform">
            <input type="text" className="textinput" placeholder="Title" value={this.state.title} onChange={e => this.setState({ title: e.target.value})}/>
            <input type="text" className="textinput" placeholder="Image url" value={this.state.image} onChange={ e=>this.setState({image : e.target.value})}/>
            <textarea name="" id="desc" cols="30" rows="10" className="textinput" value={this.state.description} onChange={ e => this.setState({description:e.target.value})}></textarea>
            <AddButton text={"Add"} lastId={this.props.lastId} inputs={this.state}/>
        </div>
    }
}