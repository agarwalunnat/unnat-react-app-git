import React, { Component } from 'react';
// Step#3 redux
import { connect } from 'react-redux';
class BasicReduxComponent extends Component {
  render() {
    const { ctr } = this.props;
    console.log(ctr);
    return (
      <div>
        <h1>I am BasicReduxComponent {ctr}</h1>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  };
}

export default connect(mapStateToProps)(BasicReduxComponent);