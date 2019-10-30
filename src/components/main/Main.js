import React from 'react';
import { StyledMain } from './MainStyles';
import Header from '../header/Header';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

function Main() {
  return (
    <StyledMain>
      <Header />
      <Breadcrumbs />
    </StyledMain>
  );
}

export default Main;
