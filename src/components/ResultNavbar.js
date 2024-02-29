
import React from 'react';
import './ResultsNavbar.css';

const ResultsNavbar = () => {
  return (
    <div className="results-navbar">
      <div className="live-results">Live Results</div>
      <div className="history">History</div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default ResultsNavbar;
