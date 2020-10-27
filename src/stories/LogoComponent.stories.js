import React from 'react';
import LogoComponent from '../components/LogoComponent';

export default {
  title: 'LogoComponent',
  component: LogoComponent,
};

const Template = (args) => <LogoComponent {...args} />;

export const logoComponentTest = Template.bind({});
logoComponentTest.args = {
  imgSrc: "logo192.png",
};
