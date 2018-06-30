import React from 'react';
import Header from './header/Header';
import Poster from './poster/Poster';
import Post from './post/Post';
import Footer from './footer/Footer';
import FullPost from './post/FullPost';
import TextInput from './post/TextInput';


var posts = [
    {
        image : "http://s.4pda.to/Bjyyg3Tcrv0BdV8Y7mCPSsTswwgDaluY9qeh.jpg",
        title : "lorem ispum dolor1",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!",
        alt : "zenfone"
    },
    {
        image : "https://ivbg.ru/wp-content/uploads/2017/11/34a05f4b_resizedScaled_1020to573-1.jpg",
        title : "lorem ispum dolor2",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!",
        alt : "zenfone"
    },
    {
        image : "https://rozetked.me/images/uploads/RdsxNPHzabgX.jpg",
        title : "lorem ispum dolor3",
        description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. Dicta, atque accusamus!",
        alt : "zenfone"
    }
];

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
            {posts.map((item) => <Post image={item.image} appstate={this.showFullPost} title={item.title} description={item.description} alt={item.alt}/>)}
            <TextInput/>
            <Footer/>
        </div>
    }
}
