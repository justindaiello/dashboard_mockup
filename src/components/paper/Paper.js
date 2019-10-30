import React from 'react';
import { StyledPaper, StyledSection } from './PaperStyles';
import { TiInfoLarge } from 'react-icons/ti';

function Paper(props) {
  return (
    <StyledPaper>
      <h3 className="paper-heading">{props.heading}</h3>
      <StyledSection>
        <div className="top">
          <h4 className="sub-heading">
            {props.subTop}{' '}
            {props.toolTipTop && <TiInfoLarge className="tooltip" />}
          </h4>
          <div className="button-container">Button</div>
        </div>
        <p className="info-block">{props.contentTop}</p>
      </StyledSection>
      {props.hr && <hr className="divider" />}
      <StyledSection>
        <div className="top">
          <h4 className="sub-heading">
            {props.subBottom}{' '}
            {props.toolTipBottom && <TiInfoLarge className="tooltip" />}
          </h4>
          <div className="button-container">button</div>
        </div>
        <p className="info-block">{props.contentBottom}</p>
      </StyledSection>
    </StyledPaper>
  );
}

export default Paper;
