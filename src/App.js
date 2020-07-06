import React from 'react';
import './App.css';
import College from './College';

function App() {
  return (
    <>
      <div style={{padding: '2% 0 0 2%'}}>Colleges in North India</div>
      <div style={{display: 'flex'}}>
        <College />
        <College />
      </div>
    </>
  );
}

export default App;
