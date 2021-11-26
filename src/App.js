import React, {Fragment, useEffect} from 'react'
import {connect} from 'react-redux'
import Nav from './conponents/NavBar/Navbar'
import Home from "./conponents/Home/Home.js"
import Footer from './conponents/Footer/Footer';
import { Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { loadData } from './actions';
import Search from './conponents/Search/Search';
import Articulo from "./conponents/Articulo/articulo.js"
import Shop from './conponents/Shop/shop.js';
import ShoppingCart from './conponents/Shopping Cart/ShoppoingCard';
import  Contacto from "./conponents/Contacto/Contact"
import Loading from './conponents/Loading';
import DashBoard from "./dashBoard/src/components/Dashboard/index"

// import Pag404 from './conponents/Pag404';


function App(props) {
  const { isLoading } = useAuth0();

  useEffect(() => {
    if (isLoading) { 
      return <Loading />
    }
  }, [isLoading]);
  useEffect(()=> {
    const payloadData = localStorage.getItem('my-data');
    if(payloadData) {
      props.loadData(payloadData)
    }
  },[props])
  return (
    <Fragment>
        <Nav />
        <Route exact path="/" render={() => <Home />}/> 
        <Route  path="/busqueda" render={() => <Search />}/> 
        <Route  path="/shop/:id" component={Shop}/> 
        <Route  path="/article/:id" component={Articulo}/> 
        <Route  path="/shopping-cart" render={()=> <ShoppingCart />}/> 
        <Route  path="/contact" render={() => <Contacto/>}/>
        <Route  path="/admin" render={() => <DashBoard/>}/>
        {/* <Route component={Pag404}/> */}
      <Footer />
    </Fragment>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: data => dispatch(loadData(data)),
  }
}

export default connect(null , mapDispatchToProps)(App);