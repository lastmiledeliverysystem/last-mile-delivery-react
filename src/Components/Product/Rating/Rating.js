import React , {Component} from 'react';
import { Rating , Divider } from 'semantic-ui-react';
//  import '../Rating/Rating.css'

 const style={
     rating:{
        position: "absolute",
        left: "470px",
        top: "15%"
     }
 }
export default class rating extends Component{
    render(){
        return(
            <div>
            <Rating style={style.rating} defaultRating={3} maxRating={5} size="huge" />
            </div>
        )
    }
}

