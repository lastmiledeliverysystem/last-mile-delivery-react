import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'
import { Card, Button, Modal } from 'semantic-ui-react'


export default class MapComponent extends Component {
  state = {
      lat: 30.713990,
      lng: 31.238804,
      zoom: 13,
      password: ''
      }
  componentDidMount() {
    // this.getLocationHandler();
  }

  getLocationHandler = ()=>{
    console.log(this.state.orderId)
    axios.get('https://ce4e5547.ngrok.io/api/gps')
    .then(res => {
      console.log(res.data);
      const lat = parseInt(res.data.lat/100) + (res.data.lat-parseInt(res.data.lat/100)*100)/60
      const long = parseInt(res.data.long/100) + (res.data.long-parseInt(res.data.long/100)*100)/60
      this.setState({lat:lat, lng:long});
    })
  }

  refreshLocationHandler = ()=>{
    this.setState({lat:this.state.lat+0.001, lng:this.state.lng+.001});
    // this.getLocationHandler();
  }
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Card fluid>
        <Card.Content header='Robot Location' />
        <Card.Content >
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibXdhZ2loIiwiYSI6ImNqc29sN2J6dDBkeHc0M28wZ2ZscGNzdzgifQ.NAzm33Cn9aAV2IlYl43tgQ
            "
            />
            <Marker position={position}>
            <Popup>
              Don't Push me i'm on my way!.
            </Popup>
            </Marker>
          </Map>
        </Card.Content>
        <Card.Content extra>
          <Button fluid content='Refresh' primary size='medium' onClick={this.refreshLocationHandler}/>
          <Modal
            trigger={<Button>Show Password</Button>}
            header='Password!'
            content={this.props.password}
            actions={['Cancel', { key: 'done', content: 'Ok', positive: true }]}
          />
        </Card.Content>
      </Card>
    )
  }
}
