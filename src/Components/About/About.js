import React from 'react';
import { Icon } from 'semantic-ui-react'
import { Grid, Image, Header, Divider , Container,  Card } from 'semantic-ui-react';
import bg from '../../media/street.jpg'
import pha from '../../media/pha.jpg'
import bg2 from '../../media/card2.jpg'
import food from '../../media/food.jpg'

const style={
    h1:{
        color:'#1d064b',
        fontSize:'50px',
    },
    h2:{
        color:'#1d064b',
        fontSize:'50px',
    },
    banner:{
        backgroundImage: 'url('+bg+')',
        backgroundSize:'cover',
        backgroundPosition: 'top',
        height: '600px',
        width: '100%',
        color: 'white',
    },
    p:{
        width:'50%',
        fontSize:'30px',
        lineHeight:'1',
        textShadow:'2px 2px rgba(0,0,0,0.6)'
    },
    card:{
        backgroundImage:'url('+bg2+')',
    },
    navbar:{
        height:'100px',
        'padding-bottom':'0px'
    },
    footer:{
      backgroundColor:'#eee'
    }
}

export default class About extends React.Component {

    state = {
      rating: this.props.rate
  }

 
  render() {
    
    return (                
        <React.Fragment>
        <Grid>
          <Grid.Row verticalAlign='middle' centered columns='equal' style={style.banner}>
            <Grid.Column width={3} />
            <Grid.Column textAlign='left'>
              <Header as='h1' style={style.h1}>LMD/ DADA</Header>
              <p style={style.p}>What ever you need, where ever you are!</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
           <Grid.Column width={3} />
           
              <Header as='h2' style={style.h2}>Careers</Header>
                <Container textAlign="center">  
                    <p style={style.p}> We are an experienced team passionate about advancing robotics to dramatically improve the way we live.
                                        In previous roles, we’ve made critical contributions to technological breakthroughs in hardware, software,
                                        robotics, and machine learning. And we’ve won international competitions and launched international products.
                                        We've come together at Nuro to accomplish something big and meaningful. To swing the needle. Together. Join us.
                    </p>
                </Container>
                <Grid.Column width={3} />
          </Grid.Row>

          <Divider hidden/>
          <Grid.Row centered columns='equal' stretched>
            <Grid.Column width={3}/>
            <Header as='h2' style={style.h2}>Meet the team</Header>
            
            <Grid.Column ><Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Rawan</Card.Header>
      <Card.Meta>
        <span className='date'>Software Engineer</span>
      </Card.Meta>
      <Card.Description>
      “Nuro has a dynamic, fast-paced development environment and it has been thrilling to see how quickly the team makes breakthroughs.”
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card> </Grid.Column>
            <Grid.Column ><Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card></Grid.Column>
            <Grid.Column ><Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    </Card.Content>
  </Card></Grid.Column>
            <Grid.Column width={3}/>
          </Grid.Row>      
        </Grid>
        </React.Fragment>
    );
  }
}
