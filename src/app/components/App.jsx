import React from 'react';
import Header from './header/Header';
import Poster from './poster/Poster';
import Post from './post/Post';

export default class App extends React.Component{
    render(){
        return <div>
            <Header/>
            <Poster/>
            <Post image={"http://s.4pda.to/Bjyyg3Tcrv0BdV8Y7mCPSsTswwgDaluY9qeh.jpg"}/>
            <Post image={"https://ivbg.ru/wp-content/uploads/2017/11/34a05f4b_resizedScaled_1020to573-1.jpg"}/>
            <Post image={"https://rozetked.me/images/uploads/RdsxNPHzabgX.jpg"}/>
        </div>
    }
}