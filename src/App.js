import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Header from './components/Header';
import NavBar from './components/Nav';
import Content from './components/Content';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar />
      <Content />
    </div>  
  );
}

export default App;
