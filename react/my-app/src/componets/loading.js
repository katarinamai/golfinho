import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import LoadingImg from '../img/loading.json';

function Loading(){
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: LoadingImg
    };
    return(
        <div style={{width:'500', height:'100px'}}>
            <ReactBodyMovin options={bodyMovinOptions}/>
        </div>
    )
}

export default Loading;