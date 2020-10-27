import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// TODO, provide more props like height etc.
const LogoComponent = ({ imgSrc }) => {
    return (
        <div className="container">
            <img src={imgSrc} alt="logo" className="container__logo" />
        </div>
    );
};

LogoComponent.propTypes = {
    imgSrc: PropTypes.string,
}

LogoComponent.defaultProps = {
    imgSrc: "",
}

export default LogoComponent;