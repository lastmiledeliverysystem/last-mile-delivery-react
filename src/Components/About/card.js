import React from 'react';
import { Grid, Image, Header, Divider , Container,  Card, Label } from 'semantic-ui-react';



const style= {
    img: {
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%",
        width: "30%",
        flex: 1
    },
    name: {
        textAlign: 'center',
        backgroundColor: "#fafafa",
        color:'#1d064b',
        fontSize: "20px",
        float: "center",
        fontStyle: "italic",
        textShadow: "1px 1px grey",

    },
    word: {
        textAlign: 'justify',
        backgroundColor: "#fafafa",
        color: "black",
        fontSize: "14px",
        // fontStyle: "italic",
        marginBottom: 15,
    }
}

export default class CardAbout extends React.Component {


 
  render() {
    
    return (                
        <React.Fragment>
            <Image style={style.img}  src={this.props.image} />
            <Label style={style.name}> {this.props.name + " - " + this.props.job}</Label>
            <Label style= {style.word}> {this.props.word}</Label>
              {/* <Card>
    <Image  style={style.img} src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{this.props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.job}</span>
      </Card.Meta>
      <Card.Description>
      {this.props.word}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card>  */}
        </React.Fragment>
    );
  }
}
