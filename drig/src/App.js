import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div>David</div>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/books'>Books</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </nav>
        {routes}
      </div>
    );
  }
}

export default App;
