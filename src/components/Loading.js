import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h2>Loading...</h2>
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
}

export default Loading;
