<p>
Run with:
<br/>
yarn install
<br/>
yarn start
</p>

Run Storybook with:
<br/>
yarn run storybook

<br/>
<br/>

![Alt text](ss1.png "Music link page")
<br>

![Alt text](ss2.png "Classic link page")
<br/>

![Alt text](ss3.png "High level structure")
<br/>

<h5>
All pages are rendered through the same component: LinkListContainer.
This component contains the three parts of each page: profile, links list and bottom logo.
The links list component (LinkListComponent) will render a dynamic list from a configuration object that is being passed from the main page component.
This way allows the simple creation of new pages and extensions in the future.
</h5>

<br/>

<h5>

Configuration example:
```
    {
        type: 'musicLink',
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
        type: 'button',
        props: {
            id: 1,
            label: "48H",
            url: "https://linktr.ee/",
        },
    },
];
```
</h5>