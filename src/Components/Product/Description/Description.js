import React ,{Component} from 'react';
import { List } from 'semantic-ui-react'

const style={
    description:{
        position: "absolute",
        left: "480px",
        top: "70%",
        "font-family":"Times New Roman",
        color:"Black ",
        'font-size':'15px'
    },
    word:{
        position: "absolute",
        left: "480px",
        top: "68%"

    }

}
export default class Description extends Component {
    state = { 
        Description:["Brand: Brand Stores"
            ,"Color: Brown"
            ,"Material: Synthetic Cotton"
            ,"Type: T-Shirt",
            "Targeted Group: Men",
            "Brand : null",
            "Color : Brown",
            "Fabric Type : Synthetic",
            "Top Style : T-Shirts"]
     }
    render() { 
        return ( 
            <React.Fragment>
             <b className="word" style={style.word}>Description:</b>   
            <List className="description" style={style.description} as='ul'>
            <List.Item as='li'>{this.state.Description[0]}</List.Item>
            <List.Item as='li'>{this.state.Description[1]}</List.Item>
            <List.Item as='li'>{this.state.Description[2]}</List.Item>
            <List.Item as='li'>{this.state.Description[3]}</List.Item>
            <List.Item as='li'>{this.state.Description[4]}</List.Item>
            </List>
            </React.Fragment>
         );
    }
}
 