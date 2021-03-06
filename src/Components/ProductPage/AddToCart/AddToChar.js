import React ,{Component} from 'react';
import { Button,Header,Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const style={
    addtocart:{
        color:'white'
    },
    header:{
        top: "5%",
        width:"100%",
        height:"200px",
        
    },
    note:{
    //     position: "absolute",
    //     left: "950px",
    //     top: "42%",
        color:'red',
        textAlign:'center',
        "fontFamily":"Times New Roman",
        "fontSize":"15px"
    }
}

 class AddToCart extends Component {
  state = { 
    addToCartErr:false
   }
  addToCartHandler = ()=> {
    console.log(localStorage.getItem('token'));
    
    axios.post('http://localhost:8000/api/cart/',{'token':localStorage.getItem('token'),'itemId':this.props.itemId})
      .then(res=>{
        console.log('data',res.data);
        this.props.history.push({
          pathname:'/cart',
        })
      }).catch(err=>{
        console.log('err',err);
        this.setState({addToCartErr:true});
      })
  }
  
  render() { 
    console.log(this.props);
    return (
      <React.Fragment>
        <Header className="header" style={style.header} as='h3' block>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                  Ship to Cairo 
                    Delivered by Sunday, Mar 17
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns='equal'>
              <Grid.Column>
                <Button  color="green" size='huge' style={style.addtocart} onClick={this.addToCartHandler} fluid>ADD TO CART</Button>
              </Grid.Column>
            </Grid.Row>
            {this.state.addToCartErr?
            <Grid.Row centered columns='equal'>
              <Grid.Column >
                <p style={{textAlign:'center', color:'red'}}>You have To Login First</p>
              </Grid.Column>
            </Grid.Row>:null}
          </Grid>
        </Header>
          <header className="note" style={style.note}>Only two left in stock</header>
      </React.Fragment>
      );
  }
}

export default withRouter(AddToCart)