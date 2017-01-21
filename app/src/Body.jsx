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
        <BodyTile />
        <BodyTile />
      </div>
    )
  }
};


export default Body;