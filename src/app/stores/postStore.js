import {EventEmitter} from 'events';
import {ADD_POST, GET_POSTS, DELETE_POST} from '../constants/postsConstants';
import dispatcher from '../dispatcher';

class PostStore extends EventEmitter{
    constructor(){
        super(...arguments);

        this.posts = [];

        this.getPosts = this.getPosts.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.handler = this.handler.bind(this);
        this.deletePost = this.deletePost.bind(this);

    }

    getPosts(posts){
        this.posts = posts;
        this.change();
    }

    change(){
        this.emit('change', this.posts);
    }

    addPost(post){
        this.posts.push(post);
        this.change();
    }

    deletePost(id){
        this.posts.splice(id-1,1);
        this.change();
   }

    handler(action){
        switch(action.type){
            case ADD_POST : {
                this.addPost(action.payload);
                break;
            }

            case GET_POSTS : {
                this.getPosts(action.payload);
                break;
            }
            case DELETE_POST : {
                this.deletePost(action.payload);
            }
        }
    }
}

const postStore = new PostStore;
dispatcher.register(postStore.handler);
export default postStore;