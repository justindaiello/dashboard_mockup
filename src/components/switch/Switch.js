import React from 'react';
import { StyledSwitch } from './SwitchStyles';

function Switch(props) {
  return (
    <StyledSwitch>
      <input type="checkbox" />
      <span className="slider round" onClick={props.toggleMenu}>
        <span className="on">On</span>
        <span className="off">Off</span>
      </span>
    </StyledSwitch>
  );
}

export default Switch;
