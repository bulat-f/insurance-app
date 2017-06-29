import React, { Component } from 'react';
import './Applicant.css';

class Applicant extends Component {
  render() {
    return (
      <div className="Applicant">
        <p>
          <strong>Age:</strong> {this.props.age}
        </p>
        <p>
          <strong>Child:</strong> {this.props.child}
        </p>
        <p>
          <strong>Smoker:</strong> {this.props.smoker}
        </p>
      </div>
    );
  }
}

export default Applicant;
