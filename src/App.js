import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Header from './components/Header/Header';
import NavBar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper__content'>
          <Routes>
            <Route path='/profile/*'element={<Profile post={props.post} />} /> 
            <Route exact path='/dialogs/*'element={<Dialogs DialogsData={props.DialogsData} MessagesData={props.MessagesData}/>} /> 
          </Routes>
        </div>
      </div>  
    </BrowserRouter>
  );
}

export default App;
