import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import User from './User';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users : null,
      activeElement: 0
    }
    this.prevClickHandler = this.prevClickHandler.bind(this);
    this.nextClickHandler = this.nextClickHandler.bind(this);
  }
  render() {
    if (!this.state.users) {
      return null;
    }
    const element = this.state.activeElement;
    const users = this.state.users;
    return (
      <div className="App flex">
        <div className='indicators' onClick={this.prevClickHandler}>{'<'}</div>
        <User user={users[element]}/>
        {element + 1 < users.length && <User class='active' user= {this.state.users[element + 1]}/>}
        {element + 2 < users.length && <User user= {this.state.users[element + 2]}/>}
        <div className='indicators' onClick={this.nextClickHandler}>{'>'}</div>
      </div>
    );
  }
  componentDidMount() {
    axios.get('https://api.github.com/users').then((res) => {
        console.log(res);
        this.setState({users: res.data})
    })
  }
  prevClickHandler() {
    const element = this.state.activeElement;
    if (element !== 0) {
      this.setState({activeElement: element - 1})
    }
  }
  nextClickHandler() {
    const element = this.state.activeElement;
    const users = this.state.users;
    if (element !== users.length - 3) {
      this.setState({activeElement: element + 1})
    }
  }
}

export default App;
