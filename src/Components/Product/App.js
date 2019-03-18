import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Image from './Components/Image/Image'
import Rating from './Components/Rating/Rating'
import Size from './Components/Size/Size'
import ProductColor from './Components/ProductColor/ProductColor'
import Description from './Components/Description/Description'
import AddToCart from './Components/AddToCart/AddToChar'
// import Navbar from './Components/Navbar/Navbar'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Image/>
        <Rating/>     
        <Size/>   
        <ProductColor/>
        <Description/>
        <AddToCart/>
      </React.Fragment>
    );
  }
}

export default App;
