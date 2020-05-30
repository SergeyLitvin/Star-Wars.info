import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                Star-Wars Info 
            </div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">People</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Planets</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Starships</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;