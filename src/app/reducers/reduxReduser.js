import * as myConst from '../constants/reduxConstants';

export function reduxReducer(state = {posts : [], is_loading : false}, action){
    switch(action.type){
        case myConst.GET_POSTS_PENDING: {
            state = {...state, is_loading : true};
            break;
        }
        case myConst.GET_POSTS_FULFILLED: {
            state = {...state, is_loading : false, posts : action.payload};
            break;
        }
        case myConst.GET_POSTS_REJECTED : {
            state = {...state, is_loading : false, error_message : action.payload.error_message};
            break;
        }
        case myConst.ADD_POSTS : {
            let posts = state.posts;
            const newPosts = posts.concat([action.payload])
            state = {...state, posts : newPosts};
            console.log(posts);
            break;
        }
        case myConst.DELETE_POST : {
            let posts = state.posts;
            posts.splice(action.payload-1,1);
            const newPosts = [].concat(posts);
            console.log(newPosts);
            state = {...state, posts : newPosts};
            break;
        }
    }
    return state;
}