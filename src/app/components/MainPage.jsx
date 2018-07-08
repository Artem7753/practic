import React from 'react';
import Header from './header/Header';
import Poster from './poster/Poster';
import Post from './post/Post';
import Footer from './footer/Footer';
import TextInput from './post/TextInput';
import {getPosts} from '../actions/postsAction';
import PostsStore from '../stores/postStore';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            condition : false,
            posts : [],
            admin : 0,
            userName : ''
        };

        this.onPostChange = this.onPostChange.bind(this);
    }

    isAdmin(){
        fetch('http://localhost:3000/check', {  
                method: 'GET',  
                mode: 'cors',
              })
              .then(response => response.json())
              .then(response => this.setState({admin: response.admin, userName : response.userName}))
    }

    componentDidMount(){
        this.isAdmin();
        getPosts();
    }

    componentWillMount(){
        PostsStore.on('change', this.onPostChange )
    }

    onPostChange(posts){
        this.setState({posts});
    }

    render(){
       
        return <div>
            <Header user={this.state.userName}/>
            <Poster/>
            {this.state.posts.map((item, index) => 
                <Post key={index} admin={+this.state.admin} id={item.id} image={item.image} title={item.title} description={item.description} alt={item.alt}/>)}
           {+this.state.admin == 1 ||  <TextInput/>}
            <Footer/>
        </div>
    }
}
