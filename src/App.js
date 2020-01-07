import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import logo from './logo.png'
import classes from './button.js'
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
          Let's get you some houseplants.
        </p>
        <Button variant='contained' color='primary' className={classes.button}>
        Get Started
        </Button>
      </div>
    )
  }
}

export default App
