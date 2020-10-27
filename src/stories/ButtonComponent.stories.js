import React from 'react';
import ButtonComponent from '../components/ButtonComponent';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const buttonComponentTest = Template.bind({});
buttonComponentTest.args = {
  label: "48H",
};

export const buttonComponentClickTest = Template.bind({});
buttonComponentClickTest.args = {
  label: "49H",
  onClick: () => {console.log('click');}
 };

