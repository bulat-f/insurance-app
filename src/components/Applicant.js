import React, { Component } from 'react';
import './Applicant.scss';

class Applicant extends Component {
  render() {
    return (
      <div className="Applicant">
        <div className="Applicant-prop">
          <strong>Age:</strong> {this.props.age}
        </div>
        <div className="Applicant-prop">
          <strong>Child:</strong> {this.props.child}
        </div>
        <div className="Applicant-prop">
          <strong>Smoker:</strong> {this.props.smoker}
        </div>
        <div className="Applicant-control">
          <a>remove</a>
        </div>
      </div>
    );
  }
}

export default Applicant;
