import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from "../ButtonComponent";
import './styles.scss';

// TODO set props
const MusicLinkComponent = (props) => {
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


                    <ButtonComponent
                        label="Music1"
                    />
                    <ButtonComponent
                        label="Music2"
                    />
                </div>

        </div>
    );
}

MusicLinkComponent.propTypes = {
    // TODO
};

export default MusicLinkComponent;