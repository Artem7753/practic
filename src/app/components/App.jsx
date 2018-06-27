import React from 'react';
import Header from './header/Header';
import Poster from './poster/Poster';
import Post from './post/Post';
import Footer from './footer/Footer';
import FullPost from './post/FullPost';

export default class App extends React.Component{

    constructor(){
        super();
        this.state = {condition : false};
        this.showFullPost = this.showFullPost.bind(this);
    }

    showFullPost(){
       this.setState({condition : !(this.state.condition)});
       console.log(this.state);
    }

    render(){
        return <div>
            {this.state.condition && <FullPost image={"https://ivbg.ru/wp-content/uploads/2017/11/34a05f4b_resizedScaled_1020to573-1.jpg"} appstate={this.showFullPost}/>}
            <Header/>
            <Poster/>
            <Post image={"http://s.4pda.to/Bjyyg3Tcrv0BdV8Y7mCPSsTswwgDaluY9qeh.jpg"} appstate={this.showFullPost}/>
            <Post image={"https://ivbg.ru/wp-content/uploads/2017/11/34a05f4b_resizedScaled_1020to573-1.jpg"} appstate={this.showFullPost}/>
            <Post image={"https://rozetked.me/images/uploads/RdsxNPHzabgX.jpg"} appstate={this.showFullPost}/>
            <Footer/>
        </div>
    }
}
//  <FullPost image={"https://ivbg.ru/wp-content/uploads/2017/11/34a05f4b_resizedScaled_1020to573-1.jpg"}/>