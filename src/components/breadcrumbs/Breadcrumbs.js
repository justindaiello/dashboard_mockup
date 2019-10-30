import React from 'react';
import { StyledBreadcrumb } from './BreadcrumbStyles';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Breadcrumbs(props) {
  return (
    <StyledBreadcrumb>
      <p className="breadcrumbs">
        <a href="#" rel="noopener" className="breadcrumb-link">
          Placeholder <MdKeyboardArrowRight className="arrow-icon" />
        </a>
        Placeholder
      </p>
    </StyledBreadcrumb>
  );
}
