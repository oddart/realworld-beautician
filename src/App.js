import React, { Component } from 'react';
import Contact from './components/Contact';
import AppMenu from './components/AppMenu';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppMenu />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
