import React, { useState } from 'react';
import { StyledNav, StyledHeader, StyledLink, StyledButton } from './NavStyles';
import { MdKeyboardArrowRight, MdNotificationsNone } from 'react-icons/md';
import {
  FaLandmark,
  FaReceipt,
  FaChartLine,
  FaBookOpen,
  FaStore,
} from 'react-icons/fa';

function Nav() {
  const [menuActive, setMenuActive] = useState(true);

  //toggle sidebar open and closed
  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <StyledNav open={menuActive} id="navigation-bar">
      <StyledHeader>
        {menuActive && <h1 className="nav-heading">Linus</h1>}
        <StyledButton rotate={menuActive ? 'spin' : ''} onClick={toggleMenu}>
          <MdKeyboardArrowRight />
        </StyledButton>
      </StyledHeader>
      <ul className="navigation" aria-labelledby="navigation-bar">
        <li>
          <StyledLink href="/" rel="noopener">
            <span>
              <FaLandmark />
            </span>
            {menuActive && 'Accounts'}
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/" rel="noopener">
            <span>
              <FaReceipt />
            </span>
            {menuActive && 'Ledger'}
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/" rel="noopener">
            <span>
              <FaChartLine />
            </span>
            {menuActive && 'Finance'}
          </StyledLink>
        </li>
      </ul>
      <ul className="navigation" aria-labelledby="navigation-bar">
        <li>
          <StyledLink href="/" rel="noopener">
            <span>
              <FaBookOpen />
            </span>
            {menuActive && 'Learn'}
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/" rel="noopener">
            <span>
              <FaStore />
            </span>
            {menuActive && 'Marketplace'}
          </StyledLink>
        </li>
        <li className="notifications-icon">
          <StyledLink href="/" rel="noopener">
            <span>
              <MdNotificationsNone />
            </span>
            {menuActive && 'Marketplace'}
          </StyledLink>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
