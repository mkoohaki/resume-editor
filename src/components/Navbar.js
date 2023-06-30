import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/jobs'>Create job</Link>
            </li>
            <li>
              <Link to='/companies'>Create company</Link>
            </li>
            <li>
              <Link to='/resume'>Create resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
