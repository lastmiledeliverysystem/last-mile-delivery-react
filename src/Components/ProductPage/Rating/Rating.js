import React , {Component} from 'react';
import { Rating } from 'semantic-ui-react';
//  import '../Rating/Rating.css'

export default class rating extends Component{
    state={
        name:this.props.name,
        price:this.props.price,
        rate:this.props.rate
    }
    render(){
        return(
            <Rating defaultRating={this.state.rate} maxRating={5} size="small" icon="star"/>
        )
    }
}

