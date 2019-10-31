import React, { useState } from 'react';
import {
  StyledDropdown,
  DropdownMenu,
  Pointer,
  DropdownMenuItem,
  StyledContainer,
  StyledArrowContainer,
} from './DropdownStyles';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Dropdown(props) {
  const [menuActive, setMenuActive] = useState(false);

  // click handler to toggle the menu open and closed
  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <StyledDropdown onClick={toggleMenu}>
        {props.title}
        <StyledArrowContainer rotate={menuActive ? 'spin' : ''}>
          <MdKeyboardArrowDown className="arrow" />
        </StyledArrowContainer>
      </StyledDropdown>
      <StyledContainer showMenu={menuActive ? 'show' : ''}>
        <Pointer />
        <DropdownMenu>
          <ul className="menu-list">
            {props.menuItems.map(item => (
              <DropdownMenuItem key={item.title}>
                <a href="/" rel="noopener" className="menu-link">
                  {item.title}
                  <span className="menu-icon">{item.icon}</span>
                </a>
              </DropdownMenuItem>
            ))}
          </ul>
        </DropdownMenu>
      </StyledContainer>
    </>
  );
}

export default Dropdown;
