import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default class StarRating extends React.Component {

    state = {
      rating: this.props.rate
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    console.log("rate,", rating)
    
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
      />
      </div>
    );
  }
}
