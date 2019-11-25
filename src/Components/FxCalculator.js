import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDown from './DropDown/DropDown';
import { connect } from 'react-redux';
import '../App.css';

class FxCalculator extends Component {
  componentDidMount() {
    this.props.setCurrencyList();
  }

  updateFromValue = (value) => {
    if (!isNaN(value)) {
      const convertToFloat = parseFloat(value);
      this.props.updateFromValue(convertToFloat);
    }
  }

  render() {
    const {
      fromValue,
      toValue,
      updateToCurrency,
      updateFromCurrency,
      toCurrency,
      fromCurrency,
      currencyList
    } = this.props;

    return (
      <div>
        <h1>FX calculator</h1>
        <div>
          <div className="maindropdown">
            <DropDown
              options={currencyList}
              initCrrency={fromCurrency}
              updateCurrency={updateFromCurrency}
            />
            <input
              type="number"
              value={fromValue}
              onChange={event => this.updateFromValue(event.target.value)}
            />
          </div>
          <div className="maindropdown">
            <DropDown
              options={currencyList}
              initCrrency={toCurrency}
              updateCurrency={updateToCurrency}
            />
            <input
              type="number"
              value={toValue}
              onChange={() => alert("Edit Not WOrk for To Field")}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fromValue: state.fromValue,
    toValue: state.toValue,
    initCrrency: state.initCrrency,
    fromCurrency: state.fromCurrency,
    toCurrency: state.toCurrency,
    currencyList: state.currencyList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrencyList: () => {
      return dispatch({ type: 'GET_CURRENCY_LIST' });
    },
    updateFromValue: value =>
      dispatch({ type: 'UPDATE_FROM_VALUE', value: value }),
    updateFromCurrency: value =>
      dispatch({ type: 'UPDATE_FROM_CURRENCY', value: value }),
    updateToCurrency: value =>
      dispatch({ type: 'UPDATE_TO_CURRENCY', value: value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FxCalculator);

FxCalculator.defaultProps = {
  currencyList: [],
  fromValue: '',
  toValue: '',
  toCurrency: '',
  fromCurrency: '',
  setCurrencyList: () => undefined,
  updateFromValue: () => undefined,
  updateFromCurrency: () => undefined,
  updateToCurrency: () => undefined
};

FxCalculator.propTypes = {
  currencyList: PropTypes.array,
  fromValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toCurrency: PropTypes.string,
  fromCurrency: PropTypes.string,
  setCurrencyList: PropTypes.func,
  updateFromValue: PropTypes.func,
  updateFromCurrency: PropTypes.func,
  updateToCurrency: PropTypes.func
};