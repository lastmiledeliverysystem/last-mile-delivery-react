import React, { Component } from 'react'
import { Menu, Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

const style={
  h1:{
      color:'#1d064b',
      'font-size':'20px',
  }
}
class Footer extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) =>{
    this.setState({ activeItem: name });
    console.log("henaaaaa")
    this.props.history.push({
        pathname:'/about',
      });
    }
    render() {
      const { activeItem } = this.state
      return (
        <Grid textAlign='center'>
          <Grid.Row centered columns='equal' style={style.navbar} textAlign='center'>
            <Grid.Column  />
            <Grid.Column >
              <Menu text fluid>
                <Menu.Item 
                  name='ABOUT US' 
                  active={activeItem === 'ABOUT US'} 
                  onClick={this.handleItemClick} />
                <Menu.Item
                  name='OUR WORK'
                  active={activeItem === 'OUR WORK'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='CONTACT US'
                  active={activeItem === 'CONTACT US'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='FAQS'
                  active={activeItem === 'FAQS'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column  />
          </Grid.Row>
        </Grid>
      )
    }
  
}
export default withRouter(Footer);

