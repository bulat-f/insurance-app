import React, { Component } from 'react';
import Applicant from './Applicant';

class Applicants extends Component {
  render() {
    const applicants = [{ id: 0, age: 21, smoker: true }]
    return (
      <div className="Applicants">
        {applicants.map(applicant =>
          <Applicant key={applicant.id} age={applicant.age} smoker={applicant.smoker} />
        )}
      </div>
    );
  }
}

export default Applicants;
