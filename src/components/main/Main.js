import React from 'react';
import { StyledMain, StyledSection } from './MainStyles';
import Header from '../header/Header';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

function Main() {
  return (
    <StyledMain>
      <Header />
      <Breadcrumbs />
      <StyledSection></StyledSection>
    </StyledMain>
  );
}

export default Main;
