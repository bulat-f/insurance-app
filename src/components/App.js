import React, { Component } from 'react';
import ApplicantForm from './ApplicantForm';
import Applicants from './Applicants';
import './Plan.css';

class App extends Component {
  render() {
    return (
      <div className="App row">
        <div className="col-md-6">
          <ApplicantForm />
          <Applicants />
          <div className="form-group">
            <input type="text" placeholder="Enrollment Date" />
          </div>
        </div>

        <div class="col-md-6">
        </div>
      </div>
    );
  }
}

export default App;
