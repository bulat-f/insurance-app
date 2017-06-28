import React, { Component } from 'react';
import Applicant from './Applicant'
import './Plan.css';

class Plan extends Component {
  constructor(props) {
    super(props);
    this.state = { applicants: [{}]};
    this.addApplicant = this.addApplicant.bind(this);
  }

  addApplicant() {
    this.setState(prevState => ({
      applicants: prevState.applicants.concat([{}])
    }));
  }
  render() {
    return (
      <div>
        {this.state.applicants.map((applicant, index) =>
          <Applicant key={index} />
        )}
        <button onClick={this.addApplicant}>
          Add new applicant
        </button>
        <div className="form-group">
          <input type="text" placeholder="Enrollment Date" />
        </div>
      </div>
    );
  }
}

export default Plan;
