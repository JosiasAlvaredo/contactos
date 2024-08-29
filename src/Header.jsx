import React from 'react';
import '@picocss/pico';
import logo from './assets/logo.png';

function Header() {
    return (
        <nav className="nav">
            <img
                src={logo}
                alt="Logo"
                style={{
                    width: 25,
                    height: 25,
                }}
            />
        </nav>
    );
}

export default Header;