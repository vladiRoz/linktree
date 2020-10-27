import React from 'react';
import ProfileLogoComponent from '../components/ProfileLogoComponent';

export default {
  title: 'ProfileLogoComponent',
  component: ProfileLogoComponent,
};

const Template = (args) => <ProfileLogoComponent {...args} />;

export const profileLogoTest = Template.bind({});
profileLogoTest.args = {
  imgSrc: "vlmsmall.jpg",
  profileName: "@vladiRozen",
};

export const profileDefaultTest = Template.bind({});
profileDefaultTest.args = {};
