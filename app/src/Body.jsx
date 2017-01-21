import React, { Component } from 'react';
import BodyTile from './BodyTile';


class Body extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="tiles-container">
        <div className="tiles-row">
          <BodyTile project={'derp'}/>
          <BodyTile project={'herpa derp'}/>
          <BodyTile project={'schmerpa derp'}/>
        </div>
      </div>
    )
  }
};


export default Body;