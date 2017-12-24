import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';
import './reset.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className = "mainHead">
        <nav className = "mainNav">
          <div className = "DR">David Rigtrup</div>
          <div>
            <Link to='/contact'><p className = "navbtn">Contact</p></Link>
            <Link to='/books'><p className = "navbtn">Books</p></Link>
            <Link to='/blog'><p className = "navbtn">Blog</p></Link>
            <Link to='/about'><p className = "navbtn">About</p></Link>
            <Link to='/'><p className = "navbtn">Home</p></Link>
          </div>
        </nav>
        {routes}
        </header>
      </div>
    );
  }
}

export default App;
