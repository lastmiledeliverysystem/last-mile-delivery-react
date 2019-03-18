import React ,{Component} from 'react'
import { Image , Divider } from 'semantic-ui-react'

// import { bold } from 'ansi-colors';

const style={
    name:{
        "padding":"20px",
        "font-weight": "bold",
        "font-family":"Times New Roman",
        color:"Black ",
        'font-size':'40px'
    },
    price:{
        position: "absolute",
        left: "480px",
        top: "20%",
        "font-weight": "bold",
        "font-family":"Times New Roman",
        color:"green ",
        'font-size':'20px'
    }
};
export default class Imag extends  Component {
    state={
        name:"Happy Ninja",
        price:"55.00 EGP"
    }
    render() { 
        return (
            <React.Fragment>
                <Image size='large' verticalAlign='top'  src='https://verdilife.com/wp-content/uploads/2018/10/happy_ninja_tee_front-510x510.jpg' 
                className="image" /> <span className="name" style={style.name}>{this.state.name}</span>
                <p className="price" style={style.price}>{this.state.price}</p>

            </React.Fragment>
                
        )}};