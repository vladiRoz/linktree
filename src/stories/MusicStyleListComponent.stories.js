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

