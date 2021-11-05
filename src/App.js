import React, {Fragment} from 'react'
import Nav from './conponents/NavBar/Navbar'
import Home from "./conponents/Home/Home.js"
import { Route } from "react-router-dom";
import './App.css';
import Footer from './conponents/Footer/Footer'

export function App() {
  return (
    <Fragment>
      <Nav />
        <Route exact path="/" render={() => <Home />}/> 
      <Footer />
    </Fragment>
  );
}

export default App;
