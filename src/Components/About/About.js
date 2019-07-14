import React from 'react';
import { Icon } from 'semantic-ui-react'
import { Grid, Image, Header, Divider , Container,  Card } from 'semantic-ui-react';
import bg from '../../media/street.jpg'
import pha from '../../media/pha.jpg'
import bg2 from '../../media/card2.jpg'
import food from '../../media/food.jpg'
import CardAbout from './card'

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
    container: {
      textAlign: "center",
      wordWrap: "break-word",
      fontSize:'30px',
      lineHeight:'1',
      // textShadow:'2px 2px rgba(0,0,0,0.6)',
      color:'#1d064b',
    },
    title:{
      textAlign: "center",
      fontSize:'30px',
      lineHeight:'1',
      marginBottom:'20px',
      // textShadow:'2px 2px rgba(0,0,0,0.6)',
      color:'#1d064b',
        },
    p:{
        width:'50%',
        fontSize:'30px',
        lineHeight:'1',
        // textShadow:'2px 2px rgba(0,0,0,0.6)'
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
      team: [
        {
          name:"Alaa",
          job: "Software Engineer",
          image: "https://semantic-ui.com/images/avatar2/large/kristy.png",
          word: "“LMD has a dynamic, fast-paced development environment and it has been thrilling to see how quickly the team makes breakthroughs.”"
        },
        {
          name:"Al-Zahraa",
          job: "Software Engineer",
          image:"https://semantic-ui.com/images/avatar2/large/kristy.png",
          word: "“LMD has a dynamic, fast-paced development environment and it has been thrilling to see how quickly the team makes breakthroughs.”"
        },
        {
          name:"Hossam",
          job: "Software Engineer",
          image:"https://react.semantic-ui.com/images/avatar/large/matthew.png",
          word: "“LMD has a dynamic, fast-paced development environment and it has been thrilling to see how quickly the team makes breakthroughs.”"
        },
        {
          name:"Maha",
          job: "Software Engineer",
          image:"https://semantic-ui.com/images/avatar2/large/kristy.png",
          word: "“LMD has a dynamic, fast-paced development environment and it has been thrilling to see how quickly the team makes breakthroughs.”"
        },
        {
          name:"Kassim",
          job: "Software Engineer",
          image:"https://react.semantic-ui.com/images/avatar/large/matthew.png",
          word: "“LMD has a dynamic, fast-paced development environment and it has been thrilling to see how quickly the team makes breakthroughs.”"
        },
        {
          name:"Wagih",
          job: "Software Engineer",
          image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
          word: "“LMD has a dynamic, fast-paced development environment and it has been thrilling to see how quickly the team makes breakthroughs.”"
        },
        {
          name:"Rawan",
          job: "Software Engineer",
          image:"https://semantic-ui.com/images/avatar2/large/kristy.png",
          word: "“LMD has a dynamic, fast-paced development environment and it has been thrilling to see how quickly the team makes breakthroughs.”"
        },
      ]
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
           <Grid.Column width={10}>
              <Container style={style.title}>
                <Header >Careers</Header>
              </Container>
           </Grid.Column>
           <Grid.Column width={3} />
            <Container style={style.container}>  
                <p> We are an experienced team passionate about advancing robotics to dramatically improve the way we live.
                                    In previous roles, we’ve made critical contributions to technological breakthroughs in hardware, software,
                                    robotics, and machine learning. And we’ve won international competitions and launched international products.
                                    We've come together at Serbero to accomplish something big and meaningful. To swing the needle. Together. Join us.
                </p>
            </Container>
            {/* <Grid.Column width={3} /> */}
          </Grid.Row>

          <Divider hidden/>
          <Grid.Row centered columns='equal' stretched>
            <Grid.Column width={3}/>
            <Grid.Column width={10}>
              <Container style={style.title}>
                <Header >Meet The Team</Header>
              </Container>
            </Grid.Column>
            <Grid.Column width={3}/>
            {this.state.team.map((n) =>
            <Grid.Column width={5} key={n._id}>
              <CardAbout image={n.image} name={n.name} job={n.job} word={n.word} />                
            </Grid.Column>
            )}
          </Grid.Row>      
        </Grid>
        </React.Fragment>
    );
  }
}
