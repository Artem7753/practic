import {ADD_POSTS, DELETE_POST, GET_POSTS} from '../constants/reduxConstants';

export default class ReduxActions{
    
    static getPosts(){
        return {
            type: GET_POSTS,
            payload :  fetch('http://localhost:3000/data', {  
                credentials: 'include',
              })
            .then((response) => response.json())
        }
    }

    static addPost(title, image, description, id){
        let post = {title, image, description, id};

        return {
            type : ADD_POSTS,
            payload : post
        }

    }

    static deletePost(id){
        fetch('http://localhost:3000/delete/'+id, {
            credentials: 'include',
        });
        return {
            type : DELETE_POST,
            payload : id
        }
    }
}