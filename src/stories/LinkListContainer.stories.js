import React from 'react';
import LinkListContainer from '../components/LinkListContainer';

export default {
  title: 'LinkListContainer',
  component: LinkListContainer,
};

const Template = (args) => <LinkListContainer {...args} />;

export const containerTest = Template.bind({});
containerTest.args = {
  user: {},
};
