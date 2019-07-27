import React ,{Component} from 'react';
import { List } from 'semantic-ui-react'

const style={
    description:{
        color:"Black ",
        'fontSize':'15px',
        marginTop:"0"
    },
    word:{
        fontSize:'20px',
        "fontWeight": "bold",
        margin:"0"
    }

}
export default class Description extends Component {
    state = { 
        Description:[this.props.description]
     }
    render() { 
        return ( 
            <React.Fragment>
                <p className="word" style={style.word}>Description:</p>   
                <List className="description" style={style.description} as='ul'>
                <List.Item as='li'>{this.props.description}</List.Item>
                {/* <List.Item as='li'>{this.props.description}</List.Item>
                <List.Item as='li'>{this.props.description}</List.Item>
                <List.Item as='li'>{this.props.description}</List.Item> */}
                {/* <List.Item as='li'>{this.state.Description[1]}</List.Item>
                <List.Item as='li'>{this.state.Description[2]}</List.Item>
                <List.Item as='li'>{this.state.Description[3]}</List.Item>
                <List.Item as='li'>{this.state.Description[4]}</List.Item> */}
                </List>
            </React.Fragment>
         );
    }
}
 
