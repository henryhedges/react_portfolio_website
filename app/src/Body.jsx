import React, { Component } from 'react';
import BodyTile from './BodyTile';


class Body extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <BodyTile project={'derp'}/>
        <BodyTile project={'herpa derp'}/>
        <BodyTile project={'schmerpa derp'}/>
      </div>
    )
  }
};


export default Body;