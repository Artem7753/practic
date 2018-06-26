import React from 'react';

export default class Header__nav extends React.Component {
    render() {
        return <nav className="header__nav">
            <ul className="header__nav__menu">
                <li className="header__nav__menu__item"><a href="#main" className="header__nav__menu__item__link">Main</a></li>
                <li className="header__nav__menu__item"><a href="#about" className="header__nav__menu__item__link">About</a></li>
                <li className="header__nav__menu__item"><a href="#post" className="header__nav__menu__item__link">Post</a></li>
            </ul>
        </nav>
    }
}