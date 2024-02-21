import React from 'react';

const Nav = () => (

    <ul className="nav nav-pills nav-stacked">
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
          Dropdown <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li className="divider"></li>
          <li><a href="#">Separated link</a></li>
        </ul>
      </li>
    </ul>
);

export default Nav;
