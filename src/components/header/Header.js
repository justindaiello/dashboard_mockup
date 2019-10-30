import React from 'react';
import { StyledHeader, StyledNav } from './HeaderStyles';
import Dropdown from '../dropdown/Dropdown';
import { MdNotificationsNone } from 'react-icons/md';

function Header() {
  return (
    <StyledHeader>
      <div className="header-container">
        <h1 className="heading">Settings</h1>
        <StyledNav>
          <li>
            <Dropdown />
          </li>
          <li>
            <div className="icon-container">
              <MdNotificationsNone className="notifications-icon" />
              <span className="notifications-badge" />
            </div>
          </li>
          <li>
            <div className="photo-container">
              <img
                src="/archer.jpg"
                className="profile-photo"
                alt="profile"
              ></img>
            </div>
          </li>
        </StyledNav>
      </div>
    </StyledHeader>
  );
}

export default Header;
