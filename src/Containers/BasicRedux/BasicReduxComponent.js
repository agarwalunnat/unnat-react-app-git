import React, { Component } from 'react';
// Step#3 redux
import { connect } from 'react-redux';
class BasicReduxComponent extends Component {
  render() {
    const { ctr } = this.props;
    return (
      <React.Fragment>
        <div>
          <h1>Counter: {ctr}</h1>
        </div>
        <div>
          <button onClick={this.props.onIncrementCounter}>Increment</button>
          <button onClick={this.props.onDecrementCounter}>Decrement</button>
          <button onClick={this.props.onAdd}>Add 5</button>
          <button onClick={this.props.onSubtract}>Subtract 5</button>
        </div>
        <hr />
        <div>
          <button onClick={() => this.props.onStore(ctr)}>Store result</button>
        </div>
        <ul>
          {
            this.props.storedResult.map(({ id, value }) => {
              return (
                <div key={id}>
                  <li>{value}</li>
                  <button onClick={() => this.props.deleteResult(id)}> Delete </button>
                </div>);
            })
          }
        </ul>
      </React.Fragment>

    );
  }
};

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResult: state.res.results
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onAdd: () => dispatch({ type: 'ADD', value: 5 }),
    onSubtract: () => dispatch({ type: 'SUBTRACT', value: 5 }),
    onStore: (result) => dispatch({ type: 'STORE_RESULT', result }),
    deleteResult: (id) => dispatch({ type: 'DELETE_RESULT', id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicReduxComponent);