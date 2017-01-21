import React, { Component } from 'react';
import NavBar from './NavBar';
import Header from './Header'
import Body from './Body';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pageView: null
    }
  }

  render () {
    return (
      <div>
        <NavBar/>
        <Header/>
        <Body/>
        Tests
      </div>
    )
  }
};


export default App;
