  import React, { Component, createRef } from 'react'
import { Grid } from 'semantic-ui-react';
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
import TrackingPassword from './Components/Tracking/TrackingPassword';
import TrackingPage from './Components/Tracking/TrackingPage';
import AddProduct from './Components/AddProduct/AddProduct';



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
        // height:'100px',
        'paddingBottom':'0px',
        boxShadow: 'rgba(0, 0, 0, 0.19) 0px 0px 2px'
    },
    footer:{
      backgroundColor:'#eee'
    },
    bgColor:{
      backgroundColor:"#fafafa",
      minHeight: 'calc(100vh - 90px - 80px)'
    }
}

class App extends Component {

  state = {
    data:"First app",
    productData:{},
    category: {},
    isLogged:false
  }
  
  changeProductHandler = (p) => {
    this.setState({productData:p})
  }
  changeCategoryHandler = (c) => {
    this.setState({category :c})
  }
  toggleLogHandler = ()=>{
    this.setState({isLogged:!this.state.isLogged});
  }

  contextRef = createRef()

  render() {

    const getComp = (cmp) =>(
      <Grid.Row centered columns='equal' style={style.bgColor}>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column>{cmp}</Grid.Column>
        <Grid.Column width={1}></Grid.Column>
      </Grid.Row>
    )
    
    return (
      <Grid  >
        <Grid.Row centered columns='equal' style={style.navbar}>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column><Navbar isLogged={this.state.isLogged}/></Grid.Column>
          <Grid.Column width={1}></Grid.Column>
        </Grid.Row>

        <Switch>
          <Route path='/not-found' component={()=>getComp(<NotFound/>)} />
          {/* <Route path='/shop' component={()=>getComp(<Shop isVendor={true}/>)}/> */}
          {/* <Route path='/login' exact component={LogIn} /> */}
          <Route path='/login' render={(props)=> <LogIn toggleLogHandler={this.toggleLogHandler} {...props}/>} />
          <Route path='/shop/:category' render={(props)=>getComp(<Shop isVendor={true} {...props}/>)} />
          <Route path='/Products/:vendorId' render={(props)=> getComp(<Shop isVendor={false} changeProductHandler={this.changeProductHandler} {...props}/>)}  />
          <Route path='/ProductPage/:productId' render={(props)=>getComp(<ProductPage {...props} productData={this.state.productData}/>)} />
          <Route path='/cart'  render={(props)=> <Cart {...props}/>} />
          <Route path='/TrackingPassword/' render={(props)=> <TrackingPassword {...props}/>} />
          <Route path='/TrackingPage/' render={(props)=>getComp(<TrackingPage isVendor={true} {...props}/>)} />
          {/* <Route path='/login' exact component={LogIn} /> */}
          <Route path='/AddProduct'  render={(props)=>getComp(<AddProduct isVendor={true} {...props}/>)} />
          <Route path='/' exact component={Main} />
          <Redirect to='/not-found'/>
        </Switch>

        {/* <Divider hidden/> */}
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
