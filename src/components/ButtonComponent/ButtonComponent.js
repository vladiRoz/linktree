import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ButtonComponent = ({ backgroundColor, label, ...props }) => {
  return (
    <button
      type="button"
      className="button"
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

ButtonComponent.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};

export default ButtonComponent;