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
  clickListener: (id) => console.log('clicked', id),
  components: [
    {
      type: LINK_COMPONENTS.button,
      props: {
        id: 0,
        label: "49H",
      },
    },
    {
      type: LINK_COMPONENTS.button,
      props: {
        id: 1,
        label: "49H",
      },
    }
  ],
};

