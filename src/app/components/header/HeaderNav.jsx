import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderNav extends React.Component {
    render() {
        return <nav className="header__nav">
            <ul className="header__nav__menu">
                <li className="header__nav__menu__item"><Link to="/" className="header__nav__menu__item__link">Main</Link></li>
                <li className="header__nav__menu__item"><Link to="/autorization" className="header__nav__menu__item__link">Autorization</Link></li>
            </ul>
        </nav>
    }
}