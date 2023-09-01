// Header.js
import React from 'react';

function Header() {
  return (
    <header>
        <h1 style={{color:"black"}}>chris larson</h1>
        <nav>
            <a href="#work"><p>work</p></a>
            <a href="#"><p>cv</p></a>
            <a href="#contact"><p>contact</p></a>
        </nav>
    </header>
  );
}

export default Header;