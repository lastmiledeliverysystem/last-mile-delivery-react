import React, { Component } from 'react'
import { Grid ,Input,Button,Segment} from 'semantic-ui-react';
import axios from 'axios';



export default class AddProduct extends Component{
  state = { 
   }

  addToProducts = ()=> {
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
            <Input label='Product Name' placeholder='Product Name' />
          </Grid.Column>
          <Grid.Column width={5}>
           < Input label='Category' placeholder='Category' />
          </Grid.Column>
        </Grid.Row>
    
        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Price' placeholder='Price' />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='Unit' placeholder='EX: LE' />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='specs' placeholder='Specs' />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='Quantity' placeholder='Quantity' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns='equal'>
        <Grid.Column width={3}/>
          <Grid.Column width={5}>
            <Input label='Image' placeholder='ImageUrl' />
          </Grid.Column>
          <Grid.Column width={5}>
            <Input label='BarCode' placeholder='BarCode' />
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