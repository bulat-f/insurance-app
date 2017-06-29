import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addApplicant } from '../actions';
import './ApplicantForm.css';

class ApplicantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: null,
      child: null,
      smoker: null
    };
  }

  addApplicant() {
    const { age, child, smoker } = this.state;
  }

  render() {
    return (
      <div className="Applicant">
        <div className="form-group">
          <input
            type="number"
            placeholder="Age of Patient"
            onChange={event => this.setState({ age: event.target.value })}
          />
        </div>
        <div className="form-group">
          <lable>
            <input
              type="checkbox"
              onChange={event => this.setState({ child: event.target.value })}
            />
            Child
          </lable>
          <lable>
            <input
              type="checkbox"
              onChange={event => this.setState({ smoker: event.target.value })}
            />
            Smoker
          </lable>
        </div>
        <button onClick={event => this.addApplicant()}>
          Add new applicant
        </button>
      </div>
    );
  }
}

export default connect(null, { addApplicant })(ApplicantForm);
