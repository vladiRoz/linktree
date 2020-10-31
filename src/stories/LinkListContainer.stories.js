import React from 'react';
import LinkListContainer from '../components/LinkListContainer';
import {LINK_COMPONENTS} from '../components/LinkListComponent/LinkListComponent'

export default {
  title: 'LinkListContainer',
  component: LinkListContainer,
};

const Template = (args) => <LinkListContainer {...args} />;

export const classicLinkPage = Template.bind({});
classicLinkPage.args = {
  linkComponents: [
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
    ],
};

export const musicStylePage = Template.bind({});
musicStylePage.args = {
  linkComponents: [
      {
        type: LINK_COMPONENTS.musicLink,
        props: {
          id: 0,
          label: "Music",
          musicUrls: [
            {
              id: 0,
              label: 'Spotify',
              url: 'www',
            },
            {
              id: 1,
              label: 'Apple Music',
              url: 'www',
            },
            {
              id: 2,
              label: 'SoundCloud',
              url: 'www',
            }
          ],
      }
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
    ],
};
