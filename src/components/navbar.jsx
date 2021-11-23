import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <span className="navbar-logo">
          <i className="fas fa-leaf"></i>
        </span>
        <h1 className="navbar-logo">Habit tracker</h1>
        <span className="navbar-count">{this.props.totalCount}</span>
      </nav>
    );
  }
}
