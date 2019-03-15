import React, { Component } from 'react'
import { Grid, Image, Header, Divider } from 'semantic-ui-react';
import bg from '../../media/street.jpg'
import pha from '../../media/pha.jpg'
import bg2 from '../../media/card2.jpg'
import food from '../../media/food.jpg'
import './Main.css'

const style={
    h1:{
        color:'#1d064b',
        'font-size':'50px',
    },
    banner:{
        'background-image': 'url('+bg+')',
        backgroundSize:'cover',
        'background-position': 'top',
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

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid.Row centered columns='equal' style={style.banner}>
          <Grid.Column width={3} />
          <Grid.Column textAlign='left'>
            <Header as='h1' style={style.h1}>LMD/ DADA</Header>
            <p style={style.p}>What ever you need, where ever you are!</p>
          </Grid.Column>
        </Grid.Row>
        <Divider hidden/>
        <Grid.Row centered columns='equal' stretched>
          <Grid.Column width={3}/>
          <Grid.Column ><Image src={food} label={{ as: 'a', color: 'blue', content: 'Food', icon: 'food', ribbon: true }}/></Grid.Column>
          <Grid.Column ><Image src={pha} label={{ as: 'a', color: 'blue', content: 'Mediacl', icon: 'medkit', ribbon: true }}/></Grid.Column>
          <Grid.Column ><Image src={bg2} label={{ as: 'a', color: 'blue', content: 'shopping', icon: 'shopping basket', ribbon: true }}/></Grid.Column>
          <Grid.Column width={3}/>
        </Grid.Row>
      </React.Fragment>
    )
  }
}
