import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import Loading from '../img/loading.json';

function LoadingImg(){
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: Loading,
    };
    return(
        <div style={{width:'20%'}}>
            <ReactBodyMovin options={bodyMovinOptions}/>
        </div>
    )
}

export default LoadingImg;