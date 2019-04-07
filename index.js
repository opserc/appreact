import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav';

import './style.css';
import './bootstrap.css';

class App extends Component {
  constructor() {
    super();    
  }

  render() {
    return (
      <div>
        <Nav/>        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
