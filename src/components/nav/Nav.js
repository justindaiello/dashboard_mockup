import React, { useState } from 'react';
import { StyledNav, StyledHeader, StyledLink } from './NavStyles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {
  FaLandmark,
  FaReceipt,
  FaChartLine,
  FaBookOpen,
  FaStore,
} from 'react-icons/fa';

function Nav() {
  const [menuActive, setMenuActive] = useState(true);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <StyledNav open={menuActive} id="navigation-bar">
      <StyledHeader>
        {menuActive && <h1 className="nav-heading">Linus</h1>}
        <button className="toggler" onClick={toggleMenu}>
          {menuActive ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
        </button>
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
      </ul>
    </StyledNav>
  );
}

export default Nav;
