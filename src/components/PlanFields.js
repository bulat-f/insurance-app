import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPlanFields } from '../actions';
import './PlanFields.scss';

class PlanFields extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  defaultState() {
    return {
      fips_code: '',
      household_income: '',
      household_size: 1,
      zip_code: ''
    }
  }

  send() {
    this.props.setPlanFields(this.state);
    this.setState(this.props);
  }

  render() {
    return (
      <div className="PlanFields">
        <div className="form-group">
          <input
            type="text"
            placeholder="fips code"
            value={this.state.fips_code}
            onChange={event => this.setState({ fips_code: event.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="household income"
            value={this.state.household_income}
            onChange={event => this.setState({ household_income: event.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="household_size"
            value={this.state.household_size}
            onChange={event => this.setState({ household_size: event.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="zip code"
            value={this.state.zip_code}
            onChange={event => this.setState({ zip_code: event.target.value })}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            onClick={event => this.send()}>
            Send
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fips_code: state.fips_code,
  household_income: state.household_income,
  household_size: state.household_size,
  zip_code: state.zip_code
})

export default connect(mapStateToProps, { setPlanFields })(PlanFields);
