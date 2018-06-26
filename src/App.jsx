import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import {Route, Link, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Todo List</h1>
        <p>
          <Link to='/todos'>See my todos</Link>
        </p>
        <p>
          <Link to='/todos/new'>Add new todo</Link>
        </p>
        <Route path='/todos' component={TodoList} />
        <Route path='/' exact render={() => <Redirect to='/todos' />} />
      </div>
    );
  }
}

export default App;
