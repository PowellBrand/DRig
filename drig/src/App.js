import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';
import './reset.css';
import './App.css';
import './components/landing/landing.css'
import './components/contact/contact.css'
import './components/books/books.css'
import './components/blog/blog.css'
import './components/about/about.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      slide: false
    }

    this.slide = this.slide.bind(this);
  }
  slide() {
    this.setState({
      slide: !this.state.slide
    })
  }

  render() {
    return (
      <div className="App">
        <header className="mainHead">
          <nav className="mainNav">
            <div className="DR">David Rigtrup</div>
            <div className="navContainer">
              <Link to='/contact'><p className="navbtn">Contact</p></Link>
              <Link to='/blog'><p className="navbtn">Blog</p></Link>
              <Link to='/books'><p className="navbtn">Books</p></Link>
              <Link to='/about'><p className="navbtn">About</p></Link>
              <Link to='/'><p className="navbtn">Home</p></Link>
            </div>
            <div onClick={this.slide} className='ham-menu'>
            </div>
          </nav>
          {routes}
        </header>
        <footer className='mainFoot'>
        </footer>
      </div>
    );
  }
}

export default App;
