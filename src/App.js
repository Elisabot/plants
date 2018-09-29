import React, { Component } from 'react'
import logo from './logo.png'
import 'typeface-roboto'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Plants</h1>
        </header>
        <p className='App-intro'>
          An application that reminds you to feed your plants.
        </p>
      </div>
    )
  }
}

export default App
