import React , {Component} from 'react';
import { Rating } from 'semantic-ui-react';
//  import '../Rating/Rating.css'

 const style={
     rating:{
        // position: "absolute",
        // left: "470px",
        // top: "15%"
     },
    name:{
        "fontWeight": "bold",
        "font-family":"Times New Roman",
        color:"Black ",
        'font-size':'40px',
    },
    price:{
        "fontWeight": "bold",
        "font-family":"Times New Roman",
        color:"green ",
        'font-size':'20px',
        marginTop:'10px'
    }
 }
export default class rating extends Component{
    state={
        name:this.props.name,
        price:this.props.price,
        rate:this.props.rate
    }
    render(){
        return(
            <div>
                <Rating style={style.rating} defaultRating={this.state.rate} maxRating={5} size="huge" />
            </div>
        )
    }
}

