import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import 'materialize-css/dist/css/materialize.min.css'
import './index.css';

import App from './App';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/" hashType="noslash">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Intro />} />
          <Route path="Intro" element={<Intro />} />
          <Route path="About" element={<About />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Work" element={<Work />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
