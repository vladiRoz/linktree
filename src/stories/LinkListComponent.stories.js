import React from 'react';
import LinkListComponent from '../components/LinkListComponent';
import { LINK_COMPONENTS } from '../components/LinkListComponent/LinkListComponent';

export default {
  title: 'LinkListComponent',
  component: LinkListComponent,
};

const Template = (args) => <LinkListComponent {...args} />;

// todo add more tests
// TODO add url to each button
// TODO global theme maybe backend call for colors.
// add the link container to the app
export const linkListTest = Template.bind({});
linkListTest.args = {
  clickListener: (data) => console.log('clicked', data),
  components: [
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
      },
    },
    {
      type: LINK_COMPONENTS.button,
      props: {
        id: 1,
        label: "Link 2",
      },
    },
    {
      type: LINK_COMPONENTS.button,
      props: {
        id: 3,
        label: "Link 3",
      },
    }
  ],
};

