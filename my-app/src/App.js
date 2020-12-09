import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './components/Greet'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import './components/Welcome'
import Hello from './components/Hello'
import Message from './components/message'
function App() {
  return (
    <div className="App">
      <Message />
     { /*<Greet name = "Name1" heroname = 'saddd'>
        <p>This is the childern tags</p>
      </Greet>
      <Greet name = "Name2" heroname = 'eiowji'>
        <button>Action</button>
      </Greet>
      <Welcome name = "Name1" heroname = 'saddd'/>
      <Welcome name = "Name2" heroname = 'eiowji'/>
  <Hello />*/}
    </div>
  );
}

export default App;
