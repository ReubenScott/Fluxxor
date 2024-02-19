import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';

import React, { Fragment } from 'react';
// import logo from './logo.svg';
import Search from "./components/Search";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <Search evidenceFileName={'left111'}/>

        <ul>
            <li>one223</li>
            <li>two22</li>
            <li>three22</li>
        </ul>

    </div>
  );
}

export default App;
