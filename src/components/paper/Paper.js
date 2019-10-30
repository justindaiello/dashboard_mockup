import React from 'react';
import { StyledPaper, StyledSection } from './PaperStyles';

function Paper(props) {
  return (
    <StyledPaper>
      <h3 className="paper-heading">Placeholder</h3>
      <StyledSection>
        <div className="top">
          <h4 className="sub-heading">Placeholder</h4>
          <div className="button-container">Placeholder</div>
        </div>
        <p className="info-block">{props.contentTop}</p>
      </StyledSection>
      <hr className="divider" />
      <StyledSection>
        <div className="top">
          <h4 className="sub-heading">Placeholder</h4>
          <div className="button-container">Placeholder</div>
        </div>
        <p className="info-block">Placeholder</p>
      </StyledSection>
    </StyledPaper>
  );
}

export default Paper;
