import React, { Component } from 'react';
import ApplicantForm from './ApplicantForm';
import Applicants from './Applicants';
import DrugPackageForm from './DrugPackageForm';
import DrugPackages from './DrugPackages';
import PlanFields from './PlanFields';
import Plans from './Plans';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-4">
            <ApplicantForm />
            <Applicants />
          </div>

          <div className="col-md-4">
            <DrugPackageForm />
            <DrugPackages />
          </div>
          <div className="col-md-4">
            <PlanFields />
          </div>
        </div>
        <div className="row">
          <Plans />
        </div>
      </div>
    );
  }
}

export default App;
