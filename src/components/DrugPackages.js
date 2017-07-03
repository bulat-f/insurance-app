import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrugPackage from './DrugPackage';

class DrugPackages extends Component {
  render() {
    const { drugPackages } = this.props
    return (
      <div className="DrugPackages">
        {drugPackages.map(drugPackage =>
          <DrugPackage
            key={drugPackage.id}
            id={drugPackage.id}
            med_id={drugPackage.med_id}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  drugPackages: state.drugPackages
})

export default connect(mapStateToProps, null)(DrugPackages);
