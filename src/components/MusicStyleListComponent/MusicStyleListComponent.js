import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import './styles.scss';

// TODO click to open the url
const generateMusicUrlsList = (urlsArray) => {
    return urlsArray.map(urlData => {
        const { id, label, url } = urlData;
        return (
            <li key={id} className="musicLinksList__item">
                <FontAwesomeIcon className="musicLinksList__item--logo" icon={faCompass} />
                <div className="musicLinksList__item--wrapper">
                    <span className="musicLinksList__item--label">{label}</span>
                    <span className="musicLinksList__item--icon">{String.fromCharCode(62)}</span>
                </div>
            </li>
        );
    });
}

const MusicStyleListComponent = (props) => {
    const { musicUrls } = props;
    return (
        <div>
            <ul className="musicLinksList">
                {generateMusicUrlsList(musicUrls)}
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