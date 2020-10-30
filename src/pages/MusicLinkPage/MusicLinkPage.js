import React, { Component } from 'react';
import { LINK_COMPONENTS } from '../../components/LinkListComponent/LinkListComponent';
import LinkListContainer from '../../layouts/LinkListContainer';

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
          {
            id: 1,
            label: 'Apple Music',
            url: 'www',
          },
          {
            id: 2,
            label: 'SoundCloud',
            url: 'www',
          }
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
  {
    type: LINK_COMPONENTS.button,
    props: {
      id: 2,
      label: "48H",
    },
  },
];

class MusicLinkPage extends Component {

    componentDidMount() {
        // TODO maybe get the configuration\links etc
    }

    globalClickListener = (clickData) => {
      console.log('click', clickData);
    }


    render() {
        return (
            <div>
                <LinkListContainer
                  linkComponents={linkComponents}
                  clickListener={this.globalClickListener}
                />
                
            </div>
        );
    }
}

export default MusicLinkPage;