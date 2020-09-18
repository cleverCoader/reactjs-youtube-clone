import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomendedVideos from './RecomendedVideos';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      
      <Router>
        <Switch>
        <Route path="/videos">
            <h1>We are In videos Page</h1>
          </Route>
          <Route path="/">
            <h1>We are In home Page</h1>
          </Route>
        </Switch>
      </Router>

      

      {/* <Header />
      <div className="app_page">
        <Sidebar />
        <RecomendedVideos />
      </div> */}

      
      
    
    </div>
  );
}

export default App;
 