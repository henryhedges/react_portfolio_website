import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import Body from './Body';


class App extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <HeaderNav/>
        <Body/>
        Test
      </div>
    )
  }
};


export default App;
