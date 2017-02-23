import React, { Component } from 'react';
import BodyTile from './BodyTile';


class Body extends Component {
  constructor () {
    super();
    this.state = {
      view: 'portfolio'
    }

    this.changeView = this.changeView.bind(this)
  }

  changeView(desiredView) {
    this.setState({ view: desiredView })
  }

  render () {

    return (
      <div>
        <div className="tiles-container">
          <BodyTile project={'OpenSauce'} tileClass={'tile'} />
          <BodyTile project={'FoodFetcher'} tileClass={'tile'} />   
        </div>
        <div className="tiles-container">
          <BodyTile project={'OpenInvite'} tileClass={'tile-bottom'} />
        </div>
      </div>
    )
  }
}


export default Body;