import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

const style={
    // size:{
    //     position: "absolute",
    //     left: "480px",
    //     top: "40%"
    // },
    // word:{
    //     position: "absolute",
    //     left: "480px",
    //     top: "35%"

    // }
}


export default class size extends Component {
    state = { 
        size:["S","M","l","Xl"]
     }
    render() { 
        return ( 
            <React.Fragment>
            <b className="word" style={style.word}>Size:</b>
            <div className="size" style={style.size}>
            <Button  size='small'> {this.state.size[0]} </Button>
            <Button size='small'>{this.state.size[1]}</Button>
            <Button size='small'>{this.state.size[2]}</Button>
            <Button size='small'>{this.state.size[3]}</Button>
            </div>
            </React.Fragment>
         );
    }
}
 
 ;