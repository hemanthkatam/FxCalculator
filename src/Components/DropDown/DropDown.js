import React from 'react';
import PropTypes from 'prop-types';

class DropDown extends React.Component {
  render() {
    const { options, updateCurrency, initCrrency } = this.props;
    const dropDownList = options && options.length > 0 ? options.map(opt => <option value={opt} key={opt}>{opt}</option>) : null;
    return (
      <select value={initCrrency} onChange={(event) => updateCurrency(event.target.value)}>
        {dropDownList}
      </select>
    );
  }
}

export default DropDown;

DropDown.defaultProps={
  options: [],
  updateCurrency: () => undefined,
  initCrrency: ''
};

DropDown.propTypes ={
  options: PropTypes.array,
  updateCurrency: PropTypes.func,
  initCrrency: PropTypes.string
};
