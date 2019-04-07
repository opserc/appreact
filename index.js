import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './src/component/Nav';

import './src/css/style.css';
import './src/css/bootstrap.css';

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
