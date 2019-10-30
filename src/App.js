import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme/Theme';
import Nav from './components/nav/Nav';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="main-app-container">
        <Nav />
      </div>
    </ThemeProvider>
  );
}

export default App;
