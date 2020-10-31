import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from "../ButtonComponent";
import './styles.scss';
import MusicStyleListComponent from '../MusicStyleListComponent';

const MusicLinkComponent = (props) => {
    const { id, label, musicUrls } = props;
    const [isShowLinks, setIsShowLinks] = useState(false);
    return (
        <div className="musicLink">
            <ButtonComponent
                label="Music"
                onClick={() => setIsShowLinks(!isShowLinks)}
            />
                <div 
                    className="musicLink__linkList"
                    animate={isShowLinks ? 'open' : 'close'}
                >
                    <MusicStyleListComponent
                        musicUrls={musicUrls}
                    />
                </div>

        </div>
    );
}

MusicLinkComponent.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    musicUrls: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default MusicLinkComponent;