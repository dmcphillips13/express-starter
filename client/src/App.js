import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

import { theme } from './themes/theme';
import LandingPage from './pages/Landing';

import './App.css';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Landing />
        </div>
        {/* <Route path="/" component={LandingPage} /> */}
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
