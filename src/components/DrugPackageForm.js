import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDrugPackage } from '../actions';
import './DrugPackageForm.scss';

class DrugPackageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      med_id: ''
    };
  }

  addDrugPackage() {
    const { id, med_id } = this.state;
    this.props.addDrugPackage(id, med_id);
    this.setState({ id: '', med_id: '' })
  }

  render() {
    return (
      <div className="DrugPackageForm">
        <input
          type="text"
          placeholder="Drug Package's ID"
          value={this.state.id}
          onChange={event => this.setState({ id: event.target.value })}
        />
        <input
          type="text"
          placeholder="Med ID"
          value={this.state.med_id}
          onChange={event => this.setState({ med_id: event.target.value })}
        />
        <button onClick={event => this.addDrugPackage()}>
          Add Drug Package
        </button>
      </div>
    );
  }
}

export default connect(null, { addDrugPackage })(DrugPackageForm);
