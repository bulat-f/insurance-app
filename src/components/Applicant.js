import React, { Component } from 'react';
import './Applicant.css';

class Applicant extends Component {
  render() {
    return (
      <div className="Applicant">
        <div className="form-group">
          <input type="number" placeholder="Age of Patient" />
        </div>
        <div className="form-group">
          <lable>
            <input type="checkbox" />
            Child
          </lable>
          <lable>
            <input type="checkbox" />
            Smoker
          </lable>
        </div>
      </div>
    );
  }
}

export default Applicant;
