import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from "../ButtonComponent";
import './styles.scss';

// const MusicLinkComponent = (props) => {

//     return (
//         <div id="content"> 
//   <a href="#nav"><span>Click Here</span></a>
//   <div class="expandable" id="nav">
//     <p>Cum enim magna parturient</p>
//   </div>
//   <a href="#nav2"><span>Click Here</span></a>
//   <div class="expandable" id="nav2">
//     <p>Cum enim magna parturient</p>
//   </div>
// </div> 
//     )
// }

const MusicLinkComponent = (props) => {
    const [isShowLinks, setIsShowLinks] = useState(false);
    console.log('isShowLinks', isShowLinks);
    return (
        <div className="musicLink">
            <ButtonComponent
                label="Music"
                onClick={() => setIsShowLinks(!isShowLinks)}
            />
                <div 
                    className="musicLink__linkList"
                    animate={isShowLinks ? 'open' : 'close'}
                >
                    <ButtonComponent
                        label="Music1"
                    />
                    <ButtonComponent
                        label="Music2"
                    />
                    <ButtonComponent
                        label="Music3"
                    />
                </div>

        </div>
    );
}

MusicLinkComponent.propTypes = {
    
};

export default MusicLinkComponent;