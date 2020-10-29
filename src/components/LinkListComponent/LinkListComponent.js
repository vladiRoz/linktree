import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../ButtonComponent';
import './styles.scss';

export const LINK_COMPONENTS = {
    button: 'button',
    musicLink: 'musicLink',
}

const generateComponent = (component, clickListener) => {
    let retComponent;
    const { type, props } = component;
    const { id } = props;
    switch (type) {
        case LINK_COMPONENTS.button:
            retComponent = (
                <ButtonComponent 
                    onClick={() => clickListener(id)}
                    key={id}
                    {...props}
                />
            );
            break;
        default:
    }
    return retComponent;
}

const generateComponentsList = (components, clickListener) => 
    (components.map(component => generateComponent(component, clickListener)));

const LinkListComponent = ({ components, clickListener }) => {
    return (
        <div className="linkListContainer">
           { generateComponentsList(components, clickListener) }
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
    clickListener: PropTypes.func,
};

LinkListComponent.defaultProps = {
    components: [],
    clickListener: undefined,
};

export default LinkListComponent;