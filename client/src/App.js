import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import { theme } from './themes/theme';
import LandingPage from './pages/Landing';

import './App.css';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        {/* <Route path="/" component={LandingPage} /> */}
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default App;
