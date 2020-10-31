
Run with:
<br>
yarn install
<br>
yarn start
<br>

Run Storybook with:
<br>
yarn run storybook

<br>
<br>
![Alt text](ss1.png "Music link page")
![Alt text](ss2.png "Classic link page")
![Alt text](ss3.png "High level structure")

<h5>
All pages are rendered through the same component: LinkListContainer.
This component contains the three parts of each page: profile, links list and bottom logo.
The links list component (LinkListComponent) will render a dynamic list from a configuration object that is being passed from the main page component.
This way allows the simple creation of new pages and extensions in the future.
</h5>
<br>
<br>

<h5>
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

<h5>