import React ,{Component} from 'react';
import { Button,Header,Grid } from 'semantic-ui-react'

const style={
    addtocart:{
        margin:'20px'

    },
    header:{
        top: "5%",
        width:"300px",
        height:"200px",
        
    },
    note:{
    //     position: "absolute",
    //     left: "950px",
    //     top: "42%",
        color:'red',
        "font-family":"Times New Roman",
        "font-size":"15px"
    }
}

export default  class AddToCart extends Component {
    state = {  }
    render() { 
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
                        <Button color="green" size='huge' fluid> ADD TO CART </Button>
                       </Grid.Column>
                   </Grid.Row>

               </Grid>
                </Header>
                <header className="note" style={style.note}>Only two left in stock</header>
            </React.Fragment>
          );
    }
}
 
