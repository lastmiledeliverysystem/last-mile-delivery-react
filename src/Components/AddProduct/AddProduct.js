import React, { Component } from 'react'
import { Grid ,Input,Button,Segment} from 'semantic-ui-react';
import axios from 'axios';



export default class AddProduct extends Component{
  state = { 
    name:'',
    category:'',
    specs:'',
    price:'',
    unit:'',
    image:'',
    quantity:'',
    barcode:'',
   }

  addToProducts = ()=> {
    axios.post('http://localhost:8000/api/products/',
    { name:this.state.name,
      category:this.state.category,
      specs:this.state.specs,
      price:this.state.price,
      unit:this.state.unit,
      image:this.state.image,
      quantity:this.state.quantity,
      barcode:this.state.barcode
    }
    ,{'token':localStorage.getItem('token'),'vendorId':this.props.vendorId})
      .then(res=>{
        console.log(res.data);
        this.props.history.push({
          pathname:'/shop',
        })
      }).catch(err=>{
        console.log(err);
      })
  }


  backToHome=()=>{
      let path = '/';
      this.props.history.push(path);
  }

  render(){
    return(
     
      <React.Fragment>

      <Grid divided>
      <Grid.Column textAlign='center' width={16}>
          <Segment  textAlign ={"center"} size={"big"} color='blue'>Add Product</Segment>
        </Grid.Column>
        <Grid.Row/> 
        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Product Name' placeholder='Product Name' onChange={(event, {value})=>{this.setState({ name: value})}} />
          </Grid.Column>
          <Grid.Column width={5}>
           < Input label='Category' placeholder='Category' onChange={(event, {value})=>{this.setState({ category: value})}}/>
          </Grid.Column>
        </Grid.Row>
    
        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Price' placeholder='Price' onChange={(event, {value})=>{this.setState({ price: value})}} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='Unit' placeholder='EX: LE' onChange={(event, {value})=>{this.setState({ unit: value})}} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='specs' placeholder='Specs' onChange={(event, {value})=>{this.setState({ specs: value})}} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='Quantity' placeholder='Quantity' onChange={(event, {value})=>{this.setState({ quantity: value})}}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Image' placeholder='ImageUrl' onChange={(event, {value})=>{this.setState({ image: value})}} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='BarCode' placeholder='BarCode' onChange={(event, {value})=>{this.setState({ barcode: value})}} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns='equal'>
        <Grid.Column width={4}/>
          <Grid.Column width={5}>
          <Button size={"large"} positive onClick={this.addToProducts}>Save</Button>
          </Grid.Column>
          <Grid.Column width={2}>
          <Button size={"large"} negative  onClick={this.backToHome}>Cancle</Button>
          </Grid.Column>
          
        </Grid.Row>

        <Grid.Row/>
      </Grid>


    
      </React.Fragment>
    
   )
    }
}