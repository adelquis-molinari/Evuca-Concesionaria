import React, {Fragment, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Nav from './conponents/NavBar/Navbar'
import Home from "./conponents/Home/Home.js"
import Footer from './conponents/Footer/Footer';
import { Route } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { loadData, checkBlocked } from './actions';
import Search from './conponents/Search/Search';
import Articulo from "./conponents/Articulo/articulo.js"
import Shop from './conponents/Shop/shop.js';
import ShoppingCart from './conponents/Shopping Cart/ShoppoingCard';
import Contacto from "./conponents/Contacto/Contact"
import Loading from './conponents/Loading';
import PrivateRoute from './conponents/Private-route'
import Blocked from './conponents/Blocked';
import DashBoard from "./dashBoard/index";
import {getUsers, checkUserDb} from './Firebase/AddUserDb';
// import { apiSimpleAutos } from "./Data/apiAutos";
// import { apiSimpleMotos } from "./Data/apiMotos";
// import { apiSimpleTractores } from "./Data/apiTractores";
// import { addProduct } from './Firebase/AddProduct';

// const dataSimple = apiSimpleAutos.concat(apiSimpleMotos, apiSimpleTractores);
// const myData = {
//     dataSimple: dataSimple,
// };
// import Pag404 from './conponents/Pag404';
import ShiftDashboard from './conponents/ShiftDashboard'

function App(props) {
  const { isLoading, user, isAuthenticated } = useAuth0();

  useEffect(()=> {
    if(isAuthenticated) {
      checkUserDb(user)
    }
  }, [isAuthenticated, isLoading])
  
  useEffect(()=> {
    console.log('loop')
    if(isAuthenticated && !isLoading){
      getUsers().then(result => {
        let currentUser = result.filter(u => u.sub === user.sub)
        if(currentUser[0].blocked === true) {
          props.checkBlocked()
          console.log('asdadsasdasdasd', checkBlocked())
        }
      })
    }
  }, [isAuthenticated ,isLoading])


  useEffect(() => {
    if (isLoading) { 
      return <Loading />
    }
  }, [isLoading]);
  useEffect(()=> {
    const payloadData = localStorage.getItem('my-data');
    if(payloadData) {
      props.loadData(payloadData)
      // addProduct(myData)
    }
  },[props])

  useEffect(()=> {
    if(props.blocked && window.location.href != 'http://localhost:3000/blocked') {
        window.location.replace('http://localhost:3000/blocked')
    }
  })

  console.log(props)

  return (
    <Fragment>
        <Route exact path="/blocked" component={Blocked} />
        <Nav />
        <Route exact path="/" render={() => <Home />}/> 
        <Route  path="/busqueda" render={() => <Search />}/> 
        <Route  path="/shop/:id" component={Shop}/> 
        <Route  path="/article/:id" component={Articulo}/> 
        <Route  path="/shopping-cart" render={()=> <ShoppingCart />}/> 
        <PrivateRoute  path="/contact" component={Contacto}/>
        <PrivateRoute  path="/shift-dashboard" component={ShiftDashboard}/>
        <Route  path="/admin" render={() => <DashBoard/>}/>
        {/* <Route component={Pag404}/> */}
      <Footer />
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
  blocked: state?.blocked ? state.blocked : false,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loadData: data => dispatch(loadData(data)),
    checkBlocked: () => dispatch(checkBlocked())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);