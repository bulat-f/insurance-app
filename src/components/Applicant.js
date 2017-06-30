import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeApplicant } from '../actions';
import './Applicant.scss';

class Applicant extends Component {
  removeApplicant() {
    this.props.removeApplicant(this.props.id);
  }
  render() {
    const { age, child, smoker } = this.props;
    return (
      <div className="Applicant">
        <div className="Applicant-prop">
          <strong>Age:</strong> {age}
        </div>
        <div className="Applicant-prop">
          <strong>Child:</strong> {child.toString()}
        </div>
        <div className="Applicant-prop">
          <strong>Smoker:</strong> {smoker.toString()}
        </div>
        <a
          className="Applicant-control"
          onClick={event => this.removeApplicant()}
        >
          remove
        </a>
      </div>
    );
  }
}

export default connect(null, { removeApplicant })(Applicant);
