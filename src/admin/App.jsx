import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './routes';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          <Routes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
