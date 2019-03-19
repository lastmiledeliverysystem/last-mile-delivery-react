import React , {Component} from 'react';
import { Rating , Divider } from 'semantic-ui-react';
//  import '../Rating/Rating.css'

 const style={
     rating:{
        // position: "absolute",
        // left: "470px",
        // top: "15%"
     },
    name:{
        "font-weight": "bold",
        "font-family":"Times New Roman",
        color:"Black ",
        'font-size':'40px',
    },
    price:{
        "font-weight": "bold",
        "font-family":"Times New Roman",
        color:"green ",
        'font-size':'20px',
        marginTop:'10px'
    }
 }
export default class rating extends Component{
    state={
        name:"Happy Ninja",
        price:"55.00 EGP"
    }
    render(){
        return(
            <div>
            <h1 className="name" style={style.name}>{this.state.name}</h1>
            <p className="price" style={style.price}>{this.state.price}</p>
            <Rating style={style.rating} defaultRating={3} maxRating={5} size="huge" />
            </div>
        )
    }
}

