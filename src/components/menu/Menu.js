import React, { useState } from 'react';
import { StyledMenuButton, DropdownMenuItem, DropdownMenu } from './MenuStyles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

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
        {!menuActive ? (
          <MdKeyboardArrowDown className="arrow" />
        ) : (
          <MdKeyboardArrowUp className="arrow" />
        )}
      </StyledMenuButton>
      {menuActive && (
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
      )}
    </>
  );
}

export default Menu;
