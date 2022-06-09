import React from 'react';

const Header = () => {
  return (
    <header>
        <div>
          <span className="logo">House Staff</span>
          <ul className="nav">
            <li>About us</li>
            <li>Contacts</li>
            <li>Cabinet</li>
          </ul>
        </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;