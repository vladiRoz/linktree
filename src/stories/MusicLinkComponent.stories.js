import React from 'react';
import MusicLinkComponent from '../components/MusicLinkComponent';

export default {
  title: 'MusicLinkComponent',
  component: MusicLinkComponent,
};

const Template = (args) => <MusicLinkComponent {...args} />;

export const musicLinkTest = Template.bind({});
musicLinkTest.args = {
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
