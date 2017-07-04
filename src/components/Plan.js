import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeApplicant } from '../actions';
import './Applicant.scss';

class Plan extends Component {
  removeApplicant() {
    this.props.removeApplicant(this.props.id);
  }
  render() {
    const { id, child, smoker } = this.props;
    return (
      <div className="Applicant">
        <div className="Applicant-prop">
          <strong>ID:</strong>
          <span>{id}</span>
        </div>
        <div className="Applicant-prop">
          <strong>Second Field:</strong>
          <span></span>
        </div>
        <div className="Applicant-prop">
          <strong>Third Field:</strong>
          <span></span>
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

export default connect(null, { removeApplicant })(Plan);
