import React ,{Component} from 'react'
import { Image , Divider } from 'semantic-ui-react'

// import { bold } from 'ansi-colors';

const style={
    // name:{
    //     "padding":"20px",
    //     "font-weight": "bold",
    //     "font-family":"Times New Roman",
    //     color:"Black ",
    //     'font-size':'40px'
    // },
    // price:{
    //     position: "absolute",
    //     left: "480px",
    //     top: "20%",
    //     "font-weight": "bold",
    //     "font-family":"Times New Roman",
    //     color:"green ",
    //     'font-size':'20px'
    // }
};
export default class Imag extends  Component {

    render() { 
        return (
            <React.Fragment>
                <Image size='large' verticalAlign='top'  src='https://verdilife.com/wp-content/uploads/2018/10/happy_ninja_tee_front-510x510.jpg' 
                className="image" />
            </React.Fragment>
                
        )}};