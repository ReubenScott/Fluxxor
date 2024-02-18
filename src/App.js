import React from 'react';
// import logo from './logo.svg';
import './App.css';
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

        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export default App;
