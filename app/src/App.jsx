import React, { Component } from 'react';
import NavBar from './Nav/NavBar';
import Header from './Header'
import Body from './Body';
import Footer from './Footer';

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
        <Footer/>
      </div>
    )
  }
};


export default App;
