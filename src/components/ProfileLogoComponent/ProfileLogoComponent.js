import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// TODO, provide more props like height etc.
const ProfileLogoComponent = ({ imgSrc, profileName}) => {
    return (
        <div className="profile">
            <img src={ imgSrc } alt="logo" className="profile__logo" />
            <span className="profile__profileName">{profileName}</span>
        </div>
    );
};


ProfileLogoComponent.propTypes = {
    imgSrc: PropTypes.string,
    profileName: PropTypes.string.isRequired,
}

ProfileLogoComponent.defaultProps = {
    imgSrc: "logo192.png",
    profileName: "",  
}

export default ProfileLogoComponent;