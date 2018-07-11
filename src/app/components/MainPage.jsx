import React from 'react';
import Header from './header/Header';
import Poster from './poster/Poster';
import Post from './post/Post';
import Footer from './footer/Footer';
import TextInput from './post/TextInput';
import {getPosts} from '../actions/postsAction';
import PostsStore from '../stores/postStore';
import {connect} from 'react-redux';
import reduxAction from '../actions/ReduxActions';
import store from '../stores/reduxStore';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            condition : false,
            posts : [],
            admin : 0,
            userName : ''
        };
    }

    isAdmin(){
        return fetch('http://localhost:3000/check', {  
                method: 'GET',
                credentials: 'include',
              })
              .then(response => response.json())
              .then(response => this.setState({admin: response.admin, userName : response.userName}))
    }

    componentDidMount(){
        this.isAdmin();
       // getPosts();
       let posts = reduxAction.getPosts();
           this.props.dispatch(posts);
       console.log(this.props.posts);
    }

      

    render(){
        console.log(this.props.posts);
       
        return <div>
            <Header user={this.state.userName}/>
            <Poster/>
            {this.props.posts.map((item, index) => 
                <Post key={index} admin={+this.state.admin} id={item.id} image={item.image} title={item.title} description={item.description} alt={item.alt}/>)}
           {+this.state.admin == 1 &&  <TextInput/>}
            <Footer/>
        </div>
    }
}

function mapStateToProps(store){
    console.log(store.posts.posts);
    return {
        posts : store.posts.posts,
        is_loading : store.posts.is_loading
    }
}

export default connect(mapStateToProps)(App);