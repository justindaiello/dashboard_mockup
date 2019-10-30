import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme/Theme';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="main-app-container">
        <Nav />
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
