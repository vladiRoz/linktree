import React from 'react';
import MusicStyleListComponent from '../components/MusicStyleListComponent';
import { LINK_COMPONENTS } from '../components/LinkListComponent/LinkListComponent';

export default {
  title: 'MusicStyleListComponent',
  component: MusicStyleListComponent,
};

const Template = (args) => <MusicStyleListComponent {...args} />;

export const MusicStyleListTest = Template.bind({});
MusicStyleListTest.args = {
    clickListener: (data) => console.log('clicked', data),
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
  };
  

