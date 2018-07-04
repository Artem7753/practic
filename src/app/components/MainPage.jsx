import React from 'react';
import Header from './header/Header';
import Poster from './poster/Poster';
import Post from './post/Post';
import Footer from './footer/Footer';
import FullPost from './post/FullPost';
import TextInput from './post/TextInput';

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            condition : false,
            posts : [],
            admin : 0,
            userName : ''
        };
    }

    getPosts(){
        fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(response => this.setState({posts: response }))
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
        this.getPosts();
    }

    render(){
       
        return <div>
            <Header user={this.state.userName}/>
            <Poster/>
            {this.state.posts.map((item, index) => 
                <Post key={index} admin={+this.state.admin} id={item.id} image={item.image} title={item.title} description={item.description} alt={item.alt}/>)}
           {+this.state.admin == 1 &&  <TextInput/>}
            <Footer/>
        </div>
    }
}
