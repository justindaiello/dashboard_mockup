import React, { useState } from 'react';
import {
  StyledDropdown,
  DropdownMenu,
  Pointer,
  DropdownMenuItem,
} from './DropdownStyles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function Dropdown(props) {
  const [menuActive, setMenuActive] = useState(false); // open and close state for dropdown menu

  // click handler to toggle the menu open
  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <>
      <StyledDropdown onClick={toggleMenu}>
        {props.title}
        {menuActive ? (
          <MdKeyboardArrowUp className="arrow" />
        ) : (
          <MdKeyboardArrowDown className="arrow" />
        )}
      </StyledDropdown>
      {menuActive && (
        <>
          <Pointer />
          <DropdownMenu>
            <ul className="menu-list">
              {props.menuItems.map(item => (
                <DropdownMenuItem key={item.title}>
                  <a href="#" rel="noopener" className="menu-link">
                    {item.title}
                    <span className="menu-icon">{item.icon}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </ul>
          </DropdownMenu>
        </>
      )}
    </>
  );
}

export default Dropdown;
