import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let post = [
  {id: 1, message: 'post1', likesCount: '10'},
  {id: 2, message: 'post2', likesCount: '20'},
  {id: 3, message: 'post3', likesCount: '5'},
  {id: 4, message: 'post4', likesCount: '2'},
  {id: 5, message: 'post5', likesCount: '3'},
]
let DialogsData = [
  {id: 1, name: 'K'},
  {id: 2, name: 'V'},
  {id: 3, name: 'M'},
  {id: 4, name: 'P'},
  {id: 5, name: 'D'},
]
let MessagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Hello'},
  {id: 3, message: 'qwerty'},
  {id: 4, message: '123'},
  {id: 5, message: '456'}, 
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App post={post} DialogsData={DialogsData} MessagesData={MessagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
