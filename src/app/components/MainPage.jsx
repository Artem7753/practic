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
        };
    }

    getPosts(){
        fetch('http://localhost:3000/data')
        .then(response => response.json())
        .then(response => this.setState({posts: response }));
    }

    componentDidMount(){
        this.getPosts();
    }

    render(){
        return <div>
            <Header/>
            <Poster/>
            {this.state.posts.map((item, index) => 
                <Post key={index} id={item.id} image={item.image} title={item.title} description={item.description} alt={item.alt}/>)}
            <TextInput/>
            <Footer/>
        </div>
    }
}
