import React, {Fragment} from 'react'
import Nav from './conponents/NavBar/Navbar'
import './App.css';
import Footer from './conponents/Footer/Footer'
// import {Route} from 'react-router-dom';
// import Home from './conponents/Home/Home';
// import Agencias from './conponents/Agencias/Agencias';
// import Logins from './conponents/Logins/Logins';


function App() {
  return (
    <Fragment>
      <Nav />
      {/* <Route exact path="/" render={() => <Home />}/> 
      <Route path="/agencias" render={() => <Agencias />}/>
      <Route path="/logins" render={() => <Logins />}/> */}
      <Footer />
    </Fragment>
  );
}

export default App;
