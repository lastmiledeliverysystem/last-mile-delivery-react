import React ,{Component} from 'react';
import { List } from 'semantic-ui-react'

const style={
    description:{
        "font-family":"Times New Roman",
        color:"Black ",
        'font-size':'15px'
    },
    word:{
        fontSize:'20px'
    }

}
export default class Description extends Component {
    state = { 
        Description:[this.props.description]
     }
    render() { 
        return ( 
            <React.Fragment>
                <b className="word" style={style.word}>Description:</b>   
                <List className="description" style={style.description} as='ul'>
                <List.Item as='li'>{this.state.Description[0]}</List.Item>
                {/* <List.Item as='li'>{this.state.Description[1]}</List.Item>
                <List.Item as='li'>{this.state.Description[2]}</List.Item>
                <List.Item as='li'>{this.state.Description[3]}</List.Item>
                <List.Item as='li'>{this.state.Description[4]}</List.Item> */}
                </List>
            </React.Fragment>
         );
    }
}
 
