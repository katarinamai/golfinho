import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import Scrolldown from '../img/scroll-down.json';

function Scroll(){
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: Scrolldown,
    };
    return(
        <div style={{width:'8%'}}>
            <ReactBodyMovin options={bodyMovinOptions}/>
        </div>
    )
}

export default Scroll;