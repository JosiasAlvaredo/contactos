import React from 'react';
import '@picocss/pico';
import logo from './assets/logo.png';
import './index.css'

function Header() {
    return (
        <nav className="nav">
            <img
                src={logo}
                alt="Logo"
                style={{
                    width: 75,
                    height: 75,
                }}
            />
            <div>
                <input
                    type="text"
                    placeholder="Buscar..."
                    readOnly={false}
                    style={{ 
                        float: 'right',
                        marginTop: '3%',
                        marginRight: '3%'
                    }}                
                />
            </div>
        </nav>
    );
}

export default Header;