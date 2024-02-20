import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';

import React, { Fragment } from 'react';
// import logo from './logo.svg';
import Search from "./components/Search";
import LeftCard from "./components/LeftCard";
import Header from "./components/Header";
import Table from "./components/Table";

// テーブルの中身
const tableData = [
    [1, "Taro", "Tokyo",123],
    [2, "Jiro", "Osaka", 20],
    [3, "Hanako", "Paris", 18],
    [4, "Alice", "New York",26],
    [5, "Bob", "London",24]
];

function App() {
  return (
    <div className="App">
      <Header />

      <Search evidenceFileName={'left111'}/>

        <Table />

        <LeftCard data={tableData} />

    </div>
  );
}

export default App;
