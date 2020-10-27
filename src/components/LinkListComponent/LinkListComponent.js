import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../ButtonComponent';
import './styles.scss';

export const LINK_COMPONENTS = {
    button: 'button',
}

const generateComponent = (component) => {
    let retComponent;
    const { type, props } = component;
    switch (type) {
        case LINK_COMPONENTS.button:
            retComponent = (
                <ButtonComponent {...props} />
            );
            break;
        default:
    }
    return retComponent;
}

const generateComponentsList = (components) => 
    (components.map(component => generateComponent(component)));

const LinkListComponent = ({ components }) => {
    return (
        <div className="linkListContainer">
           { generateComponentsList(components) }
        </div>
    );
}

LinkListComponent.propTypes = {
    components: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            props: PropTypes.any,
        })
    ).isRequired,
};

LinkListComponent.defaultProps = {
    components: [],
};

export default LinkListComponent;