import React from 'react';
import Fade from 'react-reveal/Fade';

import profilePic from './img/profilePic.jpeg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Fade left big cascade>
        <h1>My first github page</h1>
        <h3>Authur: Bao Nguyen Gia</h3>
        <img src={profilePic} alt={'Profile picture'} className='profile-pic' />
      </Fade>
    </div>
  );
}

export default App;
