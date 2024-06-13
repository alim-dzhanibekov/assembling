import * as React from 'react';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

interface AppProps {
}

interface AppState {
}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          <div className="list">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default <App />;
