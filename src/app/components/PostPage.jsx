import React from 'react';
import Header from './header/Header';
import FullPost from './post/FullPost';
import Footer from './footer/Footer';

export default class PostPage extends React.Component{

    constructor(){
        super();
        this.state = {
            post : [],
        };
    }

    getPost(){
        let id = document.location.href.split('post')[1];
        fetch('http://localhost:3000/post' + id, {
            credentials: 'include',
        })
        .then(response => response.json())
        .then(response => this.setState({post: response[0] }));
    }

    componentDidMount(){
        this.getPost();
    }

    render(){
        return <div className="postpage">
        {console.log(this.state.post)}
            <Header/>
            <FullPost image={this.state.post.image} title={this.state.post.title} description={this.state.post.description}/>
            <Footer/>
        </div>
    }
}