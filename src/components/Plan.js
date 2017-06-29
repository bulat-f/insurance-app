import React, { Component } from 'react';
import ApplicantForm from './ApplicantForm';
import Applicants from './Applicants';
import './Plan.css';

class Plan extends Component {
  render() {
    return (
      <div>
        <ApplicantForm />
        <Applicants />
        <div className="form-group">
          <input type="text" placeholder="Enrollment Date" />
        </div>
      </div>
    );
  }
}

export default Plan;
