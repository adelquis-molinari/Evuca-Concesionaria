import logo from './logo.svg';
import React from 'react'
import Nav from './conponents/NavBar/Navbar'
import Home from "./conponents/Home/Home.js"
import { Route } from "react-router-dom";
import './App.css';

export function App() {
  return (
    <React.Fragment>
      <Nav />
      <Route exact path="/" component={Home}/>
    </React.Fragment>
  );
}

export default App;
