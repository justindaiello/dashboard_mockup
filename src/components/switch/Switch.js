import React from 'react';
import { StyledSwitch } from './SwitchStyles';

function Switch() {
  return (
    <StyledSwitch>
      <input type="checkbox" />
      <span className="slider round">
        <span className="on">On</span>
        <span className="off">Off</span>
      </span>
    </StyledSwitch>
  );
}

export default Switch;
