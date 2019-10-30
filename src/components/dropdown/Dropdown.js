import React from 'react';
import { StyledDropdown } from './DropdownStyles';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Dropdown() {
  return (
    <StyledDropdown>
      Placeholder
      <MdKeyboardArrowDown className="down-arrow" />
    </StyledDropdown>
  );
}

export default Dropdown;
