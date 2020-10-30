import React from 'react';
import ProfileLogoComponent from '../ProfileLogoComponent';
import LinkListComponent from '../LinkListComponent';
import LogoComponent from '../LogoComponent'
import './styles.scss';

const LinkListContainer = ({ linkComponents }) => {
    return (
        <div className="linkList">
            <div className="linkList-container">
                <div className="linkList--profileLogo">
                    <ProfileLogoComponent imgSrc="vlmsmall.jpg" profileName="@vladiRozen"/>
                </div>
                <div className="linkList--list">
                    <LinkListComponent components={linkComponents}/>
                </div>
                <div className="linkList--logo">
                    <LogoComponent imgSrc="logo192.png" />
                </div>
            </div>
        </div>
    );
};

// TODO add props and default props

export default LinkListContainer;

// TODO rename file to screen or page

// use the same for the music style page

// the three screens should only pass the configuration object