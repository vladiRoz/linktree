import React from 'react';
import MusicLinkComponent from '../components/MusicLinkComponent';

export default {
  title: 'MusicLinkComponent',
  component: MusicLinkComponent,
};

const Template = (args) => <MusicLinkComponent {...args} />;

export const musicLinkTest = Template.bind({});
musicLinkTest.args = {
  
};
