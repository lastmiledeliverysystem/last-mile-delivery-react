import React, { Component } from 'react'
import { Grid ,Input,Button,Segment} from 'semantic-ui-react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';



export default class AddProduct extends Component{

  state = { 
    name:'',
    category:'',
    description:'',
    price:1,
    unit:'',
    image:'',
    quantity:'',
    barCode:'',
   }


  
  addToProducts = ()=> {
    var token= localStorage.getItem('token');
    var decoded = jwt_decode(token);
    // console.log(decoded);  
    // console.log(decoded.id)   

    axios.post('http://localhost:8000/api/products/',
    { name:this.state.name,
      category:this.state.category,
      description:this.state.description,
      price:this.state.price,
      unit:this.state.unit,
      image:this.state.image,
      quantity:this.state.quantity,
      barCode:this.state.barCode,
      vendorId:decoded.id
    }
    ,{'token':localStorage.getItem('token')})
      .then(res=>{
        console.log("done")
        this.props.toggleAddProductHandler();
        this.props.history.push({
          pathname:'/',
        })
      }).catch(err=>{
        
        console.log(err.responce);
      })
  }


  backToHome=()=>{
      let path = '/';
      this.props.history.push(path);
  }

  render(){
    return(
      

      <Grid divided>
      <Grid.Column textAlign='center' width={16}>
          <Segment  textAlign ={"center"} size={"big"} color='blue'>Add Product</Segment>
        </Grid.Column>
        <Grid.Row/> 
        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Product Name' placeholder='Product Name' onChange={(event, {value})=>{this.setState({ name: event.target.value})}} />
          </Grid.Column>
          <Grid.Column width={5}>
           < Input label='Category' placeholder='Category' onChange={(event, {value})=>{this.setState({ category:event.target.value})}}/>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Price' placeholder='Price' onChange={(event, {value})=>{this.setState({ price:event.target.value})}} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='Unit' placeholder='EX: LE' onChange={(event, {value})=>{this.setState({ unit:event.target.value})}} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Description' placeholder='Description' onChange={(event, {value})=>{this.setState({ description: event.target.value})}} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='Quantity' placeholder='Quantity' onChange={(event, {value})=>{this.setState({ quantity:event.target.value})}}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Image' placeholder='ImageUrl' onChange={(event, {value})=>{this.setState({ image: event.target.value})}} />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='BarCode' placeholder='BarCode' onChange={(event, {value})=>{this.setState({ barCode: event.target.value})}} />
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
      
    
   )
    }
}