
Run with:
yarn install
yarn start
/
yarn run storybook

![Alt text](ss1.png "Music link page")
![Alt text](ss2.png "Classic link page")
![Alt text](ss3.png "High level structure")

All pages rendered through the same component: LinkListContainer.
With the difference in the configuration passed.
The LinkListContainer contains the main strcuture of the page with the configurability option to customize the main link list according to the page being rendered.

Configuration example:
const linkComponents = [
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
        ],
    }
  },
  {
    type: LINK_COMPONENTS.button,
    props: {
      id: 1,
      label: "48H",
    },
  },
];