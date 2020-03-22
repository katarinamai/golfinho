import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import coins from '../img/coins.json';

function LoadingImg(){
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: coins,
    };
    return(
        <div style={{width:'500px', height:'100px'}}>
            <ReactBodyMovin options={bodyMovinOptions}/>
        </div>
    )
}

export default LoadingImg;