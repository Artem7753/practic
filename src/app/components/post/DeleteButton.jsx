import React from 'react';
import {deletePost} from '../../actions/postsAction'

export default class DeleteButton extends React.Component{
    render(){
        return <div className="detele-button" onClick={() => {
            deletePost(this.props.id);
        }}>X</div>
    }
}