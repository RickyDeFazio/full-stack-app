import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="bounds">
      <h1 className="header--logo">Courses</h1>
      <nav>
        <Link className="signup" to="sign-up.html">Sign Up</Link><Link className="signin" to="sign-in.html">Sign In</Link>
      </nav>
    </div>
  </div>
)

export default Header;