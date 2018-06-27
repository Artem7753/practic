import React from 'react';
import Button from './button';

export default class Post__info extends React.Component {
    render() {
        return <div className="post__info">
            <h3 className="post__info__title">Lorem, ipsum dolor.</h3>
            <p className="post__info__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis 
                odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. 
                Dicta, atque accusamus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis 
                odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. 
                Dicta, atque accusamus!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati id esse perferendis 
                odit asperiores unde adipisci quas sequi sunt nesciunt expedita cupiditate, natus ipsam possimus ipsa eveniet. 
                Dicta, atque accusamus!
             </p>
             <Button text={this.props.buttontext} appstate={this.props.appstate}/>
        </div>
    }
}