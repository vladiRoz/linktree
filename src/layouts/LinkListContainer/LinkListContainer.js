import React from 'react';
import ProfileLogoComponent from '../../components/ProfileLogoComponent';
import LinkListComponent from '../../components/LinkListComponent';
import LogoComponent from '../../components/LogoComponent'
import './styles.scss';

// the three screens only pass the configuration object
const LinkListContainer = ({ linkComponents, clickListener }) => {
    return (
        <div className="linkList">
            <div className="linkList-container">
                <div className="linkList--profileLogo">
                    <ProfileLogoComponent imgSrc="vlmsmall.jpg" profileName="@vladiRozen"/>
                </div>
                <div className="linkList--list">
                    <LinkListComponent
                        clickListener={clickListener}
                        components={linkComponents}/>
                </div>
                <div className="linkList--logo">
                    <LogoComponent imgSrc="logo192.png" />
                </div>
            </div>
        </div>
    );
};

// TODO add props and default props!

export default LinkListContainer;