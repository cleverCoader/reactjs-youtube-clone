import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomendedVideos from './RecomendedVideos';

function App() {
  return (
    <div className="app">
      {/* <h1> Youtube Clone</h1> */}
      <Header />
      
      <div className="app_page">
        <Sidebar />
        <RecomendedVideos />
      </div>

      
      
    
    </div>
  );
}

export default App;
 