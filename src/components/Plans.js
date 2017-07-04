import React, { Component } from 'react';
import { connect } from 'react-redux';
import Plan from './Plan';

class Plans extends Component {
  render() {
    console.log(this.props.plans);
    return (
      <div className="Plans">
        {this.props.plans.map(plan =>
          <Plan
            key={plan.id}
            id={plan.id}
            age={plan.age}
            child={plan.child}
            smoker={plan.smoker}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans
})

export default connect(mapStateToProps, null)(Plans);
