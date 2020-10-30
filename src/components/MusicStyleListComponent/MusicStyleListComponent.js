import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { LinearProgress } from '@material-ui/core';
import './styles.scss';

// TODO click to open the url
const generateMusicUrlsList = (urlsArray, setSelectedMusicUrlIndex) => {
    return urlsArray.map((urlData, index) => {
        const { id, label, url } = urlData;
        return (
            <li 
                key={id} 
                className="musicLinksList__item"
                onClick={() => setSelectedMusicUrlIndex(index)}
            >
                <FontAwesomeIcon className="musicLinksList__item--logo" icon={faCompass} />
                <div className="musicLinksList__item--wrapper">
                    <span className="musicLinksList__item--label">{label}</span>
                    <span className="musicLinksList__item--icon">{String.fromCharCode(62)}</span>
                </div>
            </li>
        );
    });
}

const renderSelectedMusicLink = (selectedIndex, musicUrls) => {
    // add img or url to image
    const {id, label, url} = musicUrls[selectedIndex];
    return ( 
        <>
            <div className="musicLinkContainer-selected__wrapper">
                <img src="vlmsmall.jpg" alt="logo" className="musicLinkContainer-selected__logo" />
                <FontAwesomeIcon className="musicLinkContainer-selected__icon" icon={faPlayCircle} />
                <span className="musicLinkContainer-selected__label">{label}</span>
            </div>
            <LinearProgress 
                className="musicLinkContainer-selected__progress"
                variant="determinate" 
                value={20} />
        </>
    );
}

const MusicStyleListComponent = (props) => {
    const { musicUrls } = props;
    const [selectedIndex, setSelectedMusicUrlIndex] = useState(-1);
    return (
        <div className="musicLinkContainer">
            <div className="musicLinkContainer-selected">
                {selectedIndex !== -1 && renderSelectedMusicLink(selectedIndex, musicUrls)}
            </div>
            <ul className="musicLinksList">
                {generateMusicUrlsList(musicUrls, setSelectedMusicUrlIndex)}
            </ul>
        </div>
    );
}

MusicStyleListComponent.propTypes = {
    musicUrls: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MusicStyleListComponent;