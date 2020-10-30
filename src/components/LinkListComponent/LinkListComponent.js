import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '../ButtonComponent';
import './styles.scss';
import MusicLinkComponent from '../MusicLinkComponent';

export const LINK_COMPONENTS = {
    button: 'button',
    musicLink: 'musicLink',
}

// TODO
// inject child from parent component intead of type checking
const generateComponent = (component, clickListener) => {
    console.log('generateCompoennt', component);
    let retComponent;
    const { type, props } = component;
    const { id } = props;
    switch (type) {
        case LINK_COMPONENTS.button:
            retComponent = (
                <ButtonComponent 
                    onClick={() => clickListener({ type, id})}
                    key={id}
                    {...props}
                />
            );
            break;
        case LINK_COMPONENTS.musicLink:
            retComponent = (
                <MusicLinkComponent
                    onClick={() => clickListener({ type, id })}
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