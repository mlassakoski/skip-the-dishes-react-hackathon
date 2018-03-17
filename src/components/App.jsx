import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Products from './Products';
import Cart from './Cart';
import '../css/App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <div className="main-container">
          <Products />
          <Cart />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, null)(App);
