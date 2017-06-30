import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addApplicant } from '../actions';
import './ApplicantForm.scss';

class ApplicantForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
      child: false,
      smoker: false
    };
  }

  addApplicant() {
    const { age, child, smoker } = this.state;
    console.log(age, child, smoker);
    this.props.addApplicant(age, child, smoker);
    this.setState({ age: '', child: false, smoker: false })
  }

  render() {
    return (
      <div className="ApplicantForm">
        <div className="form-group">
          <input
            type="number"
            placeholder="Age of Patient"
            value={this.state.age}
            onChange={event => this.setState({ age: event.target.value })}
          />
        </div>
        <div className="form-group">
          <lable>
            <input
              type="checkbox"
              checked={this.state.child}
              onChange={event => this.setState({ child: event.target.checked })}
            />
            Child
          </lable>
          <lable>
            <input
              type="checkbox"
              checked={this.state.smoker}
              onChange={event => this.setState({ smoker: event.target.checked })}
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
