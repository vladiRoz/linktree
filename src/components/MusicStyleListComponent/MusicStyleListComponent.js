import React from 'react';
import PropTypes from 'prop-types';
import LinkListComponent from '../LinkListComponent';
import { LINK_COMPONENTS } from '../LinkListComponent/LinkListComponent';

const MusicStyleListComponent = (props) => {
    const { components, clickListener } = props;
    return (
        <div>
            <LinkListComponent
                clickListener={(id) => console.log('clicked', id )}
                components={components}
            />
        </div>
    );
}

MusicStyleListComponent.propTypes = {
    
};

export default MusicStyleListComponent;