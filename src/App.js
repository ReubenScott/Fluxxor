import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';

import React, {Fragment, useState} from 'react';
// import logo from './logo.svg';
import Search from "./components/Search";
import Table from "./components/Table";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Grid from "./components/Grid";
import Favourite from "./components/Favourite";

// テーブルの中身
const tableData = [
    [1, "Taro", "Tokyo",123],
    [2, "Jiro", "Osaka", 20],
    [3, "Hanako", "Paris", 18],
    [4, "Alice", "New York",26],
    [5, "Bob", "London",24]
];


function App() {
    document.title = "My Component";

  const [data, setData] = useState(tableData);

  return (
    <div className="App">
      <Header />

      <Nav />

      <Favourite />

      <Search />

        <Grid />

        <Table data={data} />

    </div>
  );
}

export default App;
