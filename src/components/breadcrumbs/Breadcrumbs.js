import React from 'react';
import { StyledBreadcrumb } from './BreadcrumbStyles';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Breadcrumbs() {
  return (
    <StyledBreadcrumb>
      <p className="breadcrumbs">
        <a href="/" rel="noopener" className="breadcrumb-link">
          Profile <MdKeyboardArrowRight className="arrow-icon" />
        </a>
        Settings
      </p>
    </StyledBreadcrumb>
  );
}
