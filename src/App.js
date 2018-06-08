import React, { Component } from 'react';
import Navigation from './Navigation';
import firebase from './firebase';

class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    console.log(this.state.authenticated);
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
          }))
        : this.setState(() => ({
            authenticated: false,
          }));
      console.log(this.state.authenticated);
    });
  }
  render() {
    return <Navigation authenticated={this.state.authenticated} />;
  }
}

export default App;
