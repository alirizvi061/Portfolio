import React from 'react';
// import logo from './logo.svg';
//Browser Router and Link Components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './components/Projects';
import Articles from './components/Articles';
import About from './components/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Projects} />
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/about' component={About} />
        <header>

          <div className="navigation">
            {/* <img src={logo} className='logo' alt="Logo Image" /> */}
            <div className="navigation-sub">

              <Link to="/" className='navItems'>Projects</Link>
              <Link to="/articles" className='navItems'>Articles</Link>
              <Link to="/about" className='navItems'>About</Link>

            </div>
          </div>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
