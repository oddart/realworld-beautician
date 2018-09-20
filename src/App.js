import React, { Component } from 'react';
import AppMenu from './components/AppMenu';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppMenu />
        <Contact />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
