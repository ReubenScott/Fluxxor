import 'bootstrap/dist/css/bootstrap.min.css';
import './style/App.scss';

import React, { Fragment } from 'react';
// import logo from './logo.svg';
import Search from "./components/Search";
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Post from './components/Post';
import Header from './components/Header';
import LeftCard from './components/LeftCard';


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

        <Fragment>

            <Header />

            <main className="my-5 py-5">
                <Container className="px-0">
                    <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

                        <Col xs={{ order: 2 }} md={{ size: 4, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                            <LeftCard />
                        </Col>

                        <Col xs={{ order: 1 }} md={{ size: 7, offset: 1 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
                            <Post />
                        </Col>

                    </Row>
                </Container>
            </main>

        </Fragment>
    </div>
  );
}

export default App;
