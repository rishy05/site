import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">PASSINNOVATE</div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#internships">Internships</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </header>
  );
}

export default Header;