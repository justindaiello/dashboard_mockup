import React, { useState } from 'react';
import { StyledNav, StyledHeader, StyledLink } from './NavStyles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function Nav() {
  const [menuActive, setMenuActive] = useState(true);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <StyledNav>
      <StyledHeader>
        <h1 className="nav-heading">Linus</h1>
        <button className="toggler" onClick={toggleMenu}>
          {menuActive ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
        </button>
      </StyledHeader>
    </StyledNav>
  );
}

export default Nav;
