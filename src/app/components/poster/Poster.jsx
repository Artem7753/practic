import React from 'react';
import './poster.css';

export default class Poster extends React.Component {
    render() {
        return <div className="poster">
            <img src="https://pp.userapi.com/c836229/v836229985/2f687/mcsOjwKqdJ4.jpg" alt="my avatar" className="poster__photo" />
            <h1 className="poster__title">Welcome in my blog!</h1>
            <h2 className="poster__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, quidem?</h2>
        </div>
    }
}