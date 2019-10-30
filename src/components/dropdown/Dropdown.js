import React, { useState } from 'react';
import { StyledDropdown } from './DropdownStyles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function Dropdown() {
  const [menuActive, setMenuActive] = useState(false); // open and close state for dropdown menu

  // click handler to toggle the menu open
  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <StyledDropdown onClick={toggleMenu}>
      Placeholder
      {menuActive ? (
        <MdKeyboardArrowUp className="arrow" />
      ) : (
        <MdKeyboardArrowDown className="arrow" />
      )}
    </StyledDropdown>
  );
}

export default Dropdown;
