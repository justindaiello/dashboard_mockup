import React from 'react';
import { StyledMain, StyledSection } from './MainStyles';
import Header from '../header/Header';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Paper from '../paper/Paper';

function Main() {
  return (
    <StyledMain>
      <Header />
      <Breadcrumbs />
      <StyledSection>
        <Paper />
        <Paper />
        <Paper />
        <Paper />
      </StyledSection>
    </StyledMain>
  );
}

export default Main;
