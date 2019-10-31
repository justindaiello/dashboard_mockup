import React, { useState } from 'react';
import {
  StyledMenuButton,
  DropdownMenuItem,
  DropdownMenu,
  StyledArrowContainer,
  Pointer,
  StyledContainer,
} from './MenuStyles';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Menu(props) {
  const [menuActive, setMenuActive] = useState(false);
  const [dropSelect, setDropSelect] = useState({
    selection: props.items[0],
  });

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  function handleSelect(e) {
    setDropSelect({ selection: e.target.id });
  }

  return (
    <>
      <StyledMenuButton onClick={toggleMenu}>
        {dropSelect.selection}
        <StyledArrowContainer rotate={menuActive ? 'spin' : ''}>
          <MdKeyboardArrowDown className="arrow" />
        </StyledArrowContainer>
      </StyledMenuButton>
      <StyledContainer showMenu={menuActive ? 'show' : ''}>
        <Pointer />
        <DropdownMenu bottom={props.bottom}>
          <ul className="menu-list">
            {props.items.map(item => (
              <DropdownMenuItem
                key={item}
                id={item}
                onClick={e => handleSelect(e)}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </ul>
        </DropdownMenu>
      </StyledContainer>
    </>
  );
}

export default Menu;
