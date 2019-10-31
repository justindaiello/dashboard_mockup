import React, { useState } from 'react';
import { StyledPaper, StyledSection } from './PaperStyles';
import { TiInfoLarge } from 'react-icons/ti';
import Switch from '../switch/Switch';
import Menu from '../menu/Menu';

function Paper(props) {
  const [topActive, setTopActive] = useState(false);
  const [bottomActive, setBottomActive] = useState(false);

  //toggle top subheader colors from the switch component
  function toggleTop() {
    setTopActive(!topActive);
  }

  //toggle bottom subheader color from the switch component
  function toggleBottom() {
    setBottomActive(!bottomActive);
  }

  return (
    <StyledPaper>
      <h3 className="paper-heading">{props.heading}</h3>
      <StyledSection>
        <div className="top">
          <h4 className={!topActive ? 'sub-heading' : 'sub-heading color'}>
            {props.subTop}{' '}
            {props.toolTipTop && <TiInfoLarge className="tooltip" />}
          </h4>
          <div className="button-container">
            {props.menu && <Menu items={props.topMenuItems} />}
            {props.switch && <Switch toggleMenu={toggleTop} />}
          </div>
        </div>
        <p className="info-block">{props.contentTop}</p>
      </StyledSection>
      {props.hr && <hr className="divider" />}
      <StyledSection>
        <div className="top">
          <h4 className={!bottomActive ? 'sub-heading' : 'sub-heading color'}>
            {props.subBottom}{' '}
            {props.toolTipBottom && <TiInfoLarge className="tooltip" />}
          </h4>
          <div className="button-container">
            {props.menu && <Menu items={props.bottomMenuItems} bottom />}
            {props.switch && <Switch toggleMenu={toggleBottom} />}
          </div>
        </div>
        <p className="info-block">{props.contentBottom}</p>
      </StyledSection>
    </StyledPaper>
  );
}

export default Paper;
