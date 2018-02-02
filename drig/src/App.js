import React, { Component } from 'react';
import routes from './routes';
import { Link } from 'react-router-dom';
import './reset.css';
import './App.css';
import './components/landing/landing.css';
import './components/contact/contact.css';
import './components/books/books.css';
import './components/blog/blog.css';
import './components/blog/blogPost.css';
import './components/about/about.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      slide: false
    }
    this.clearMenu = this.clearMenu.bind(this)
    this.slide = this.slide.bind(this);
  }
  slide() {
    this.setState({
      slide: !this.state.slide
    })
  }
  clearMenu() {
    if (this.state.slide) {
      this.setState({
        slide: !this.state.slide
      })
    }
  }

  render() {
    return (
      <div className="App" onClick={this.clearMenu}>
        <header className="mainHead">
          <div className='blankSpace'></div>
          <nav className="mainNav">
            <div className="DR">David Rigtrup</div>
            <div className="navContainer">
              <Link to='/contact'><p className="navbtn">Contact</p></Link>
              <Link to='/blog'><p className="navbtn">Blog</p></Link>
              <Link to='/books'><p className="navbtn">Nocturnal</p></Link>
              <Link to='/about'><p className="navbtn">About</p></Link>
              <Link to='/'><p className="navbtn">Home</p></Link>
            </div>
            <div onClick={this.slide} className='ham-menu'>
            </div>
          </nav>
          <div className='slider'>
            <div className={this.state.slide ? 'menu slide' : 'menu'}>
              <Link to='/'><p className="menubtn">Home</p></Link>
              <Link to='/about'><p className="menubtn">About</p></Link>
              <Link to='/books'><p className="menubtn">Nocturnal</p></Link>
              <Link to='/blog'><p className="menubtn">Blog</p></Link>
              <Link to='/contact'><p className="menubtn">Contact</p></Link>
            </div>
          </div>
        </header>
        {routes}

      </div>
    );
  }
}

export default App;
