import React ,{Component} from 'react';
import { Button } from 'semantic-ui-react'

const style={
    // size:{
    //     position: "absolute",
    //     left: "480px",
    //     top: "55%"
    // },
    // word:{
    //     position: "absolute",
    //     left: "480px",
    //     top: "50%"

    // }
}

export default  class extends Component {
    state = { 
        color:["red","yellow","blue","green"]
     }
    render() { 
        return ( 
            <React.Fragment>
            <b className="word" style={style.word}>Color:</b>
            <div className="size" style={style.size}>
            <Button   color={this.state.color[0]} size='small'> {this.state.color[0]} </Button>
            <Button  color={this.state.color[1]} size='small'>{this.state.color[1]}</Button>
            <Button  color={this.state.color[2]} size='small'>{this.state.color[2]}</Button>
            <Button color={this.state.color[3]} size='small'>{this.state.color[3]}</Button>
            </div>
            </React.Fragment>
         );
    }
}
 
