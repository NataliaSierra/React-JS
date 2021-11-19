import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Header} from './Components/UI/Header/Header.jsx';
import {Main} from './Components/UI/Main/Main.jsx';
import {Main2} from './Components/UI/Main2/Main2.jsx';
import {Card} from './Components/UI/Card/Card.jsx';
import {Footer} from './Components/UI/Footer/Footer.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Main2 />
    <Card />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);