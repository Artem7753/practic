import dispatcher from '../dispatcher';
import {ADD_POST, GET_POSTS, DELETE_POST} from '../constants/postsConstants';

export function addPost(title, image, description, id){
    const post = {title, image, description, id};

    dispatcher.dispatch({
        type: ADD_POST,
        payload : post
    })
}

export function getPosts(){
    fetch('http://localhost:3000/data', {  
        credentials: 'include',
      })
    .then((response) => response.json())
    .then((response) => {
        dispatcher.dispatch({
            type: GET_POSTS,
            payload: response
        });
    });
}

export function deletePost(id){
    fetch('http://localhost:3000/delete/'+id, {
        credentials: 'include',
    });
    dispatcher.dispatch({
        type : DELETE_POST,
        payload : id
    })
    
}