import React from 'react';
import { Grid, Image, Header, Divider , Container,  Card, Label } from 'semantic-ui-react';



const style= {
    img: {
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%",
        width: "50%"
    },
    name: {
        textAlign: 'center',
        backgroundColor: "White",
    },
    word: {
        textAlign: 'center',
        backgroundColor: "White",
    }
}

export default class CardAbout extends React.Component {


 
  render() {
    
    return (                
        <React.Fragment>
            <Container>
            <Image style={style.img}  src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Label style={style.name}> {this.props.name}</Label>
            <Label style= {style.word}> {this.props.word}</Label>
            </Container>
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
