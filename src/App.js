import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Main from "./Components/Main/Main";
import Cart from './Components/Cart/Cart';
import bg from './media/street.jpg'
import bg2 from './media/card2.jpg'
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Shop from './Components/Shop/Shop';
import ProductPage from './Components/ProductPage/ProductPage';
import LogIn from './Components/LogIn/LogIn';
import Vendors from './Components/Vendors/Vendors'
import Products from './Components/Products/Products'


const style={
    h1:{
        color:'#1d064b',
        'font-size':'50px',
    },
    banner:{
        'background-image': 'url('+bg+')',
        backgroundSize:'cover',
        'background-position': 'top',
        height: '600px',
        width: '100%',
        color: 'white',
    },
    p:{
        width:'50%',
        fontSize:'30px',
        lineHeight:'1',
        textShadow:'2px 2px rgba(0,0,0,0.6)'
    },
    card:{
        backgroundImage:'url('+bg2+')',
    },
    navbar:{
        height:'100px',
        'padding-bottom':'0px',
        boxShadow: '0 0 16px rgba(0, 0, 0, 0.15)'
    },
    footer:{
      backgroundColor:'#eee'
    }
}

class App extends Component {

  state = {
    data:"First app"
  }

  render() {

    const getComp = (cmp) =>(
      <Grid.Row centered columns='equal'>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column>{cmp}</Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid.Row>
    )
    
    return (
      <Grid  >
        <Grid.Row centered columns='equal' style={style.navbar}>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column><Navbar/></Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>

        <Switch>
          <Route path='/not-found' component={()=>getComp(<NotFound/>)} />
          <Route path='/shop' component={()=>getComp(<Shop isVendors/>)} />
          <Route path='/Products' component={()=>getComp(<Shop/>)} />
          <Route path='/ProductPage' component={()=>getComp(<ProductPage/>)} />
          <Route path='/cart' component={()=>getComp(<Cart/>)} />
          <Route path='/login' exact component={LogIn} />
          <Route path='/' exact component={Main} />
          <Redirect to='/not-found'/>
        </Switch>

        <Divider hidden/>
        <Grid.Row centered columns='equal' style={style.footer}>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column><Footer/></Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
