import React, { Component } from 'react';
import ApplicantForm from './ApplicantForm';
import Applicants from './Applicants';
import DrugPackageForm from './DrugPackageForm';
import DrugPackages from './DrugPackages';

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

        <div className="col-md-6">
          <DrugPackageForm />
          <DrugPackages />
        </div>
      </div>
    );
  }
}

export default App;
