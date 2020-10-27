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
        key: 0,
        label: "48H",
        onClick: () => { console.log('click') }
      },
    },
    {
      type: LINK_COMPONENTS.button,
      props: {
        key: 1,
        label: "48H",
        onClick: () => { console.log('click') } 
      },
    },
    {
        type: LINK_COMPONENTS.button,
        props: {
          key: 2,
          label: "48H",
          onClick: () => { console.log('click') } 
        },
      },
      {
        type: LINK_COMPONENTS.button,
        props: {
          key: 3,
          label: "48H",
          onClick: () => { console.log('click') } 
        },
      },
      {
        type: LINK_COMPONENTS.button,
        props: {
          key: 4,
          label: "48H",
          onClick: () => { console.log('click') } 
        },
      },
      {
        type: LINK_COMPONENTS.button,
        props: {
          key: 5,
          label: "48H",
          onClick: () => { console.log('click') } 
        },
      },
    //   {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //       key: 6,
    //       label: "48H",
    //       onClick: () => { console.log('click') } 
    //     },
    //   },
    //   {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //       key: 7,
    //       label: "48H",
    //       onClick: () => { console.log('click') } 
    //     },
    //   },
    //   {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //       key: 8,
    //       label: "48H",
    //       onClick: () => { console.log('click') } 
    //     },
    // },
    // {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         key: 9,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         key: 10,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         key: 11,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         key: 12,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         key: 13,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         key: 14,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         key: 15,
    //         label: "48H",
    //         onClick: () => { console.log('click') } 
    //     },
    //     },
    //     {
    //     type: LINK_COMPONENTS.button,
    //     props: {
    //         key: 16,
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