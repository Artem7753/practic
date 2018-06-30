import React from 'react';
import Header from './header/Header';
import FullPost from './post/FullPost';
import Footer from './footer/Footer';

export default class PostPage extends React.Component{

    render(){
        return <div className="postpage">
            <Header/>
            <FullPost image={"https://ivbg.ru/wp-content/uploads/2017/11/34a05f4b_resizedScaled_1020to573-1.jpg"} appstate={this.showFullPost}/>
            <Footer/>
        </div>
    }
}