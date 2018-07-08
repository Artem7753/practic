import React from 'react';
import {addPost} from '../../actions/postsAction'
 
export default class AddButton extends React.Component{

    state = {
        lastId : undefined
    }

    componentWillMount(){
        this.getLastId();
    }

    getLastId(){
        fetch('http://localhost:3000/lastId', {  
            method: 'GET',  
            credentials: 'include',
            mode: 'cors',
          }).then((response) => response.json())
          .then((response) => this.setState({lastId : response[0].id}))
    }

    insertPost(){
        let data = {
            title : this.props.inputs.title,
            image : this.props.inputs.image,
            description : this.props.inputs.description
        } ;
        fetch('http://localhost:3000/insert', {  
            method: 'POST',  
            mode: 'cors',
            credentials: 'include',
            body: JSON.stringify(data),
          });
        addPost(data.title,data.image,data.description, this.state.lastId + 1);
    }

    render(){
        return <div className="button" onClick={() => {

            this.insertPost();
              console.log(this.props.lastId);
        }}>
           <div className="button__text">{this.props.text}</div>
        </div>
    }
}