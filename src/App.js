import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="main-app-container">
        <p>hi</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
