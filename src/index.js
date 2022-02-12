import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NoPage from './NoPage';
import First from './pages/First';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Second from './pages/Second';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="first" element={<First/>} />
        <Route path="second" element={<Second/>}/>        
      </Route>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

