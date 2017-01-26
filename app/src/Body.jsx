import React, { Component } from 'react';
import BodyTile from './BodyTile';


class Body extends Component {
  constructor () {
    super();
    this.state = {
      view: 'portfolio',
    }

    this.changeView = this.changeView.bind(this)
  }

  changeView(desiredView) {
    this.setState({ view: desiredView }); 
  }

  render () {
    return (
      <div className="tiles-container">
        <BodyTile project={'derp'} />
        <BodyTile project={'herpa derp'} />
        <BodyTile project={'schmerpa derp'} />
      </div>
    )
  }
};


export default Body;