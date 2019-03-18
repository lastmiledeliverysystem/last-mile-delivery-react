import React ,{Component} from 'react';
import { Button,Header } from 'semantic-ui-react'

const style={
    addtocart:{
        position: "absolute",
        left: "1000px",
        top: "30%",
    },
    header:{
        position: "absolute",
        left: "950px",
        top: "5%",
        width:"300px",
        height:"200px",
        
    },
    note:{
        position: "absolute",
        left: "950px",
        top: "42%",
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
               Ship to Cairo 

                Delivered by Sunday, Mar 17
                </Header>
                <header className="note" style={style.note}>Only two left in stock</header>
)   
            <div className="addtocart" style={style.addtocart}>
            <Button color="green" size='huge'> ADD TO CART </Button>
            </div>
            </React.Fragment>
          );
    }
}
 
