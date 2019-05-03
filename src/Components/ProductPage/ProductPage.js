import React, { Component } from 'react';
// import './App.css';
import Rating from './Rating/Rating'
import Size from './Size/Size'
import ProductColor from './ProductColor/ProductColor'
import Description from './Description/Description'
import AddToCart from './AddToCart/AddToChar'
import { Grid, Image, Segment, Divider, Container, Dimmer, Loader } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// import Navbar from './Navbar/Navbar'
const style={
 name:{
     "fontWeight": "bold",
     color:"Black ",
     'fontSize':'30px',
     marginBottom:'0px'
 },
 price:{
     "fontWeight": "bold",
     color:"#2185d0",
     'fontSize':'30px',
    //  marginTop:'10px',
     marginBottom:'0px'
 },
 marginB:{
  marginBottom:'200px'
 },
 span:{
  'fontSize':'15px'
 },
 container:{
   marginTop:"20px"
 },
 tax:{
   margin:"0",
   color:"gray"
 },
 img:{
   objectFit:"cover",
   objectPosition:"center"
 }
}

class ProductPage extends Component {

  state={
    name: "",
    img: "",
    price: "",
    rate: "",
    description: "",
    dim:true
  }

  componentDidMount() {
    this.getDataHandler();
  }
  

  getDataHandler = ()=>{
    axios.get('http://localhost:8000/api/products/product/'+this.props.match.params.productId)
    .then((res)=>{
        this.setState({
          name:res.data.name,
          img:res.data.options.image,
          price:res.data.price,
          rate:res.data.price,
          description:res.data.description,
          dim:false
          })
        console.log(res.data);
    });
}
  
  render() {
    // console.log(this.props)
    return (
      <Segment>
        <Dimmer active={this.state.dim}>
          <Loader />
        </Dimmer>
        <Grid centered columns='equal'>
          <Grid.Row>
            <Grid.Column width={5}>
              <h1 className="name" style={style.name}>{this.state.name}</h1>
              <p style={{margin:'0'}}>by: <a href="/shop">Vendor</a></p>
              <Rating name={this.state.name} price={this.state.price} rate={this.state.rate}/> 
              <Image  verticalAlign='top' width={450} height={450} src={this.state.img} style={style.img} bordered/>
              {/* <Image.Group size='tiny' style={{marginLeft:'50px',marginTop:'7px'}}>
                <Image src={this.state.img} bordered/>
                <Image src={this.state.img} bordered/>
                <Image src={this.state.img} bordered/>
                <Image src={this.state.img} bordered/>
              </Image.Group>             */}
            </Grid.Column>

            <Grid.Column>
              <p style={style.price}>{this.state.price}<span style={style.span}> EGP</span></p>
              <p style={style.tax}>All prices include VAT</p>
              <Divider/>
              <Container style={style.container}>
                <Size/>   
              </Container>
              <Container style={style.container}>
                <ProductColor/>
              </Container>
              <Divider/>
              <Container style={style.container}>
                <Description description={this.state.description}/>
              </Container>
            </Grid.Column>
            <Grid.Column width={3} />
            <Grid.Column width={3}>
              <AddToCart item={{img:this.state.img,name:this.state.name,price:this.state.price}}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default withRouter(ProductPage);

