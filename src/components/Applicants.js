import React, { Component } from 'react';
import { connect } from 'react-redux';
import Applicant from './Applicant';

class Applicants extends Component {
  render() {
    const { applicants } = this.props
    return (
      <div className="Applicants">
        {applicants.map(applicant =>
          <Applicant key={applicant.id} age={applicant.age} smoker={applicant.smoker} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  applicants: state.applicants
})

export default connect(mapStateToProps, null)(Applicants);
