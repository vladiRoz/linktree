import React from 'react';
import ProfileLogoComponent from '../ProfileLogoComponent';
import LinkListComponent from '../LinkListComponent';
import {LINK_COMPONENTS} from '../LinkListComponent/LinkListComponent'
import LogoComponent from '../LogoComponent'
import './styles.scss';

const linkComponents = [
    {
      type: LINK_COMPONENTS.button,
      props: {
        id: 0,
        label: "48H",
        onClick: () => { console.log('click') }
      },
    },
    {
      type: LINK_COMPONENTS.button,
      props: {
        id: 1,
        label: "48H",
        onClick: () => { console.log('click') } 
      },
    },
    {
        type: LINK_COMPONENTS.button,
        props: {
          id: 2,
          label: "48H",
          onClick: () => { console.log('click') } 
        },
      },
      {
        type: LINK_COMPONENTS.button,
        props: {
          id: 3,
          label: "48H",
          onClick: () => { console.log('click') } 
        },
      },
      {
        type: LINK_COMPONENTS.button,
        props: {
          id: 4,
          label: "48H",
          onClick: () => { console.log('click') } 
        },
      },
      {
        type: LINK_COMPONENTS.button,
        props: {
          id: 5,
          label: "48H",
          onClick: () => { console.log('click') } 
        },
      },
    //   {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //       id: 6,
    //       label: "48H",
    //       onClick: () => { console.log('click') } 
    //     },
    //   },
    //   {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //       id: 7,
    //       label: "48H",
    //       onClick: () => { console.log('click') } 
    //     },
    //   },
    //   {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //       id: 8,
    //       label: "48H",
    //       onClick: () => { console.log('click') } 
    //     },
    // },
    // {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         id: 9,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         id: 10,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         id: 11,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         id: 12,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         id: 13,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         id: 14,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         id: 15,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         id: 16,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    // },
];

const LinkListContainer = () => {
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

export default LinkListContainer;