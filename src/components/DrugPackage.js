import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeDrugPackage } from '../actions';
import './DrugPackage.scss';

class DrugPackage extends Component {
  removeApplicant() {
    this.props.removeDrugPackage(this.props.id);
  }
  render() {
    const { id, med_id } = this.props;
    return (
      <div className="DrugPackage">
        <div className="DrugPackage-prop">
          <strong>ID:</strong>
          <span>{id}</span>
        </div>
        <div className="DrugPackage-prop">
          <strong>Med ID:</strong>
          <span>{med_id}</span>
        </div>
        <a
          className="DrugPackage-control"
          onClick={event => this.removeApplicant()}
        >
          remove
        </a>
      </div>
    );
  }
}

export default connect(null, { removeDrugPackage })(DrugPackage);
